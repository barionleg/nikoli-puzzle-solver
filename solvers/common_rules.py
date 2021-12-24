from grilops import Symbol, SymbolGrid, SymbolSet
from grilops.geometry import Point
from grilops.regions import RegionConstrainer, R
from uuid import uuid4
from z3 import And, Implies, Int, Not


def binary_symbol_set():
    return SymbolSet([("BLACK", "#"), ("WHITE", "+")])


def continuous_region(sg: SymbolGrid, rc: RegionConstrainer, symbol: Symbol):
    region_root = Int(str(uuid4()))
    for p in sg.lattice.points:
        sg.solver.add(Implies(sg.grid[p] == symbol, rc.region_id_grid[p] == region_root))
        sg.solver.add(Implies(sg.grid[p] != symbol, rc.region_id_grid[p] != region_root))


def no2x2(sg: SymbolGrid, symbol: Symbol):
    points = set(sg.lattice.points)
    for p in points:
        box = [p, Point(p.y + 1, p.x), Point(p.y, p.x + 1), Point(p.y + 1, p.x + 1)]
        if all([p in points for p in box]):
            sg.solver.add(Not(And(*[sg.grid[p] == symbol for p in box])))