from lib import *


class Stostone(AbstractSolver):
    def run(self, puzzle, solve):
        sg = SymbolGrid(puzzle.lattice(), grilops.make_number_range_symbol_set(0, 1))
        rc = RegionConstrainer(sg.lattice, sg.solver, complete=False)

        # Number of black squares in each region is correct
        for p, number in puzzle.texts.items():
            region = next(region for region in puzzle.regions() if p in region)
            sg.solver.add(Sum([sg.grid[q] for q in region]) == number)

        # Each region has one piece
        for region in puzzle.regions():
            region_root = var()
            for p in region:
                sg.solver.add(Implies(sg.grid[p] == 1, rc.region_id_grid[p] == region_root))
                sg.solver.add(Implies(sg.grid[p] == 0, rc.region_id_grid[p] == -1))
            sg.solver.add(Or([region_root == sg.lattice.point_to_index(p) for p in region]))
            sg.solver.add(Or([sg.grid[p] == 1 for p in region]))

        num_blocks = {p: var() for p in sg.grid}
        for p in sg.grid:
            q = p.translate(Directions.S)
            sg.solver.add(num_blocks[p] == num_blocks.get(q, 0) + sg.grid[p])

        # Half of each column is filled
        for x in range(puzzle.width):
            sg.solver.add(num_blocks[Point(0, x)] == puzzle.height // 2)

        # Blocks stack up correctly
        for p, q in puzzle.edges():
            sg.solver.add(Implies(And(sg.grid[p] == 1, sg.grid[q] == 1), num_blocks[p] == num_blocks[q] + q.y - p.y))

        no_adjacent_regions(sg, rc)

        solved_grid, solution = solve(sg)
        for p in sg.grid:
            if solved_grid[p]:
                solution.shaded[p] = True
