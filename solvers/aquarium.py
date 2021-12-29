from solvers.utils import *


class AquariumSolver(AbstractSolver):

    def __init__(self, pzprv3):
        matched = match('pzprv3/aquarium/(\\d+)/(\\d+)/(.*)/', pzprv3)
        self.height = int(matched.group(1))
        self.width = int(matched.group(2))
        self.verticals = parse_table(matched.group(3))[:self.height]
        self.horizontals = parse_table(matched.group(3))[self.height:2 * self.height - 1]
        self.grid = parse_table(matched.group(3))[2 * self.height - 1:]

    def to_pzprv3(self, solved_grid):
        symbol_set = self.symbol_set()
        result = [[symbol_set.symbols[solved_grid[Point(row - 1, col - 1)]].label if row > 0 and col > 0
                   else self.grid[row][col] for col in range(self.width + 1)] for row in range(self.height + 1)]
        return (
            'pzprv3/aquarium/'
            f'{self.height}/{self.width}/{table(self.verticals)}/{table(self.horizontals)}/{table(result)}/')

    def lattice(self):
        return grilops.get_rectangle_lattice(self.height, self.width)

    def symbol_set(self):
        return SymbolSet([("EMPTY", "+"), ("WATER", "#")])

    def configure(self, sg):
        symbol_set = self.symbol_set()

        # Convert pzprv3 format using borders into regions
        uf = UnionFind()
        for row in range(self.height):
            for col in range(self.width - 1):
                if self.verticals[row][col] == '0':
                    uf.union(Point(row, col), Point(row, col + 1))
        for row in range(self.height - 1):
            for col in range(self.width):
                if self.horizontals[row][col] == '0':
                    uf.union(Point(row, col), Point(row + 1, col))
        regions = [[q for q in sg.lattice.points if uf.find(q) == p] for p in sg.lattice.points if uf.find(p) == p]

        # Each region must have all water at the same level
        for region in regions:
            sg.solver.add(Or(
                [And([sg.cell_is(p, symbol_set.WATER if p.y >= height else symbol_set.EMPTY) for p in region])
                 for height in range(self.height + 1)]))

        # Satisfy WATER counts
        for row in range(self.height):
            sg.solver.add(PbEq(
                [(sg.cell_is(Point(row, col), symbol_set.WATER), 1) for col in range(self.width)],
                int(self.grid[row + 1][0])))
        for col in range(self.width):
            sg.solver.add(PbEq(
                [(sg.cell_is(Point(row, col), symbol_set.WATER), 1) for row in range(self.height)],
                int(self.grid[0][col + 1])))