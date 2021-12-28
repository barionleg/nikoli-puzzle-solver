from solvers.utils import *


class TentsSolver(AbstractSolver):

    def __init__(self, pzprv3):
        matched = match('pzprv3/tents/(\\d+)/(\\d+)/(.*)/', pzprv3)
        self.height = int(matched.group(1))
        self.width = int(matched.group(2))
        self.grid = parse_table(matched.group(3))[:self.height + 1]

    def to_pzprv3(self, solved_grid):
        symbol_set = self.symbol_set()
        result = [[symbol_set.symbols[solved_grid[Point(row - 1, col - 1)]].label if row > 0 and col > 0
                   else self.grid[row][col] for col in range(self.width + 1)] for row in range(self.height + 1)]
        zeroes1 = [['0' for _ in range(self.width - 1)] for _ in range(self.height)]
        zeroes2 = [['0' for _ in range(self.width)] for _ in range(self.height - 1)]
        return f'pzprv3/tents/{self.height}/{self.width}/{table(result)}/{table(zeroes1)}/{table(zeroes2)}/'

    def lattice(self):
        return grilops.get_rectangle_lattice(self.height, self.width)

    def symbol_set(self):
        return SymbolSet([("EMPTY", "."), ("TREE", "1"), ("TENT", "A")])

    def configure(self, sg):
        symbol_set = self.symbol_set()
        rc = RegionConstrainer(sg.lattice, sg.solver, complete=False, min_region_size=2, max_region_size=2)

        for row in range(self.height):
            sg.solver.add(PbEq(
                [(sg.cell_is(Point(row, col), symbol_set.TENT), 1) for col in range(self.width)],
                int(self.grid[row + 1][0])))
        for col in range(self.width):
            sg.solver.add(PbEq(
                [(sg.cell_is(Point(row, col), symbol_set.TENT), 1) for row in range(self.height)],
                int(self.grid[0][col + 1])))

        for p in sg.lattice.points:
            is_tree = self.grid[p.y + 1][p.x + 1].isnumeric()
            if is_tree:
                sg.solver.add(rc.region_id_grid[p] == sg.lattice.point_to_index(p))
            sg.solver.add(sg.cell_is(p, symbol_set.TREE) == is_tree)
            sg.solver.add(sg.cell_is(p, symbol_set.EMPTY) == (rc.region_id_grid[p] == -1))

        no_adjacent_symbols(sg, symbol_set.TENT)
