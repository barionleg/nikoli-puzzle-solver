from re import match

from solvers.aquarium import AquariumSolver
from solvers.easyasabc import EasyAsAbcSolver
from solvers.fillomino import FillominoSolver
from solvers.hashiwokakero import HashiwokakeroSolver
from solvers.heteromino import HeterominoSolver
from solvers.heyawake import HeyawakeSolver
from solvers.hitori import HitoriSolver
from solvers.kakuro import KakuroSolver
from solvers.kropki import KropkiSolver
from solvers.lightup import LightUpSolver
from solvers.lits import LITSSolver
from solvers.masyu import MasyuSolver
from solvers.minesweeper import MinesweeperSolver
from solvers.nonogram import NonogramSolver
from solvers.nurikabe import NurikabeSolver
from solvers.skyscrapers import SkyscrapersSolver
from solvers.slitherlink import SlitherlinkSolver
from solvers.starbattle import StarBattleSolver
from solvers.sudoku import SudokuSolver
from solvers.tapa import TapaSolver
from solvers.tentaisho import TentaishoSolver
from solvers.tents import TentsSolver
from solvers.yajilin import YajilinSolver
from solvers.yinyang import YinYangSolver

PUZZLES = [
    ('aquarium', "Aquarium", AquariumSolver),
    ('easyasabc', "Easy as ABC", EasyAsAbcSolver),
    ('fillomino', "Fillomino", FillominoSolver),
    ('hashikake', "Hashiwokakero", HashiwokakeroSolver),
    ('heteromino', "Heteromino", HeterominoSolver),
    ('heyawake', "Heyawake", HeyawakeSolver),
    ('hitori', "Hitori", HitoriSolver),
    ('kakuro', "Kakuro", KakuroSolver),
    ('kropki', "Kropki", KropkiSolver),
    ('lightup', "Light Up (Akari)", LightUpSolver),
    ('lits', "LITS", LITSSolver),
    ('mashu', "Masyu", MasyuSolver),
    ('mines', "Minesweeper", MinesweeperSolver),
    ('nonogram', "Nonogram", NonogramSolver),
    ('nurikabe', "Nurikabe", NurikabeSolver),
    ('skyscrapers', "Skyscrapers", SkyscrapersSolver),
    ('slither', "Slitherlink", SlitherlinkSolver),
    ('starbattle', "Star Battle", StarBattleSolver),
    ('sudoku', "Sudoku", SudokuSolver),
    ('tapa', "Tapa", TapaSolver),
    ('tentaisho', "Tentaisho (Spiral Galaxies)", TentaishoSolver),
    ('tents', "Tents", TentsSolver),
    ('yajilin', "Yajilin", YajilinSolver),
    ('yinyang', "Yin Yang", YinYangSolver),
]

DEMOS = [
    (
        'pzprv3/aquarium/6/6/1 0 1 1 0 /0 0 1 1 1 /0 1 1 1 1 /1 1 0 1 0 /1 1 0 1 1 /0 0 1 0 1 /1 1 1 1 1 1 /1 1 0 0 0 0'
        ' /1 1 1 1 1 1 /0 0 1 1 1 1 /1 1 1 1 0 1 /. 2 3 4 2 2 4 /3 . . . . . . /3 . . . . . . /3 . . . . . . /2 . . . .'
        ' . . /2 . . . . . . /4 . . . . . . /',
        'pzprv3/aquarium/6/6/1 0 1 1 0 /0 0 1 1 1 /0 1 1 1 1 /1 1 0 1 0 /1 1 0 1 1 /0 0 1 0 1 /1 1 1 1 1 1 /1 1 0 0 0 0'
        ' /1 1 1 1 1 1 /0 0 1 1 1 1 /1 1 1 1 0 1 /. 2 3 4 2 2 4 /3 + + + # # # /3 # # # + + + /3 + + # + # # /2 + + # #'
        ' + + /2 + # + + + # /4 # # # + + # /',
    ),
    (
        'pzprv3/easyasabc/5/5/3/. . 2 . 1 3 . /1 . . . . . 3 /1 . . . . . 3 /. . . . . . . /. . . . . . 3 /3 . . . . . '
        '1 /. 2 . 1 . 1 . /',
        'pzprv3/easyasabc/5/5/3/. . 2 . 1 3 . /1 1 2 3 - - 3 /1 - 1 2 - 3 3 /. 3 - - 1 2 . /. 2 - 1 3 - 3 /3 - 3 - 2 1 '
        '1 /. 2 . 1 . 1 . /',
    ),
    (
        'pzprv3/fillomino/9/9/. . . . . . . 2 3 /. 3 2 6 . . . . . /. . . 2 . . . . . /. 5 2 1 . 4 2 2 . /. 3 . . . . .'
        ' 3 . /. 2 1 5 . 5 7 9 . /. . . . . . . 2 . /. . . . . 5 2 4 . /2 3 . . . . . . . /. . . . . . . . . /. . . . .'
        ' . . . . /. . . . . . . . . /. . . . . . . . . /. . . . . . . . . /. . . . . . . . . /. . . . . . . . . /. . .'
        ' . . . . . . /. . . . . . . . . /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0'
        ' 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0'
        ' 0 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0'
        ' 0 0 0 /',
        'pzprv3/fillomino/9/9/. . . . . . . 2 3 /. 3 2 6 . . . . . /. . . 2 . . . . . /. 5 2 1 . 4 2 2 . /. 3 . . . . .'
        ' 3 . /. 2 1 5 . 5 7 9 . /. . . . . . . 2 . /. . . . . 5 2 4 . /2 3 . . . . . . . /. . . . . . . . . /. . . . .'
        ' . . . . /. . . . . . . . . /. . . . . . . . . /. . . . . . . . . /. . . . . . . . . /. . . . . . . . . /. . .'
        ' . . . . . . /. . . . . . . . . /0 1 1 0 0 1 0 1 /1 1 1 0 0 1 1 0 /0 0 1 0 1 0 0 0 /1 1 1 1 0 1 0 1 /0 1 1 0 1'
        ' 0 0 1 /0 1 1 0 0 1 1 0 /1 1 0 1 0 0 1 0 /1 1 0 0 1 1 1 0 /1 1 0 0 0 1 1 0 /1 0 0 0 0 0 1 1 0 /0 1 1 1 1 1 0 1'
        ' 1 /1 0 1 1 1 1 1 1 0 /0 1 0 1 0 1 1 1 0 /1 1 1 1 1 1 1 1 0 /1 1 1 0 1 1 0 1 1 /1 0 1 1 0 1 1 1 1 /0 0 1 1 1 0'
        ' 0 0 0 /',
    ),
    (
        'pzprv3/hashikake/13/13/2 . 4 . 3 . 1 . 2 . . 1 . /. . . . . . . . . 3 . . 1 /. . . . 2 . 3 . 2 . . . . /2 . 3 '
        '. . 2 . . . 3 . 1 . /. . . . 2 . 5 . 3 . 4 . . /1 . 5 . . 2 . 1 . . . 2 . /. . . . . . 2 . 2 . 4 . 2 /. . 4 . '
        '4 . . 3 . . . 3 . /. . . . . . . . . . . . . /2 . 2 . 3 . . . 3 . 2 . 3 /. . . . . 2 . 4 . 4 . 3 . /. . 1 . 2 '
        '. . . . . . . . /3 . . . . 3 . 1 . 2 . . 2 /0 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 '
        '0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 /0'
        ' 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0'
        ' 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0'
        ' 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0'
        ' 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0'
        ' 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 0 /',
        'pzprv3/hashikake/13/13/2 . 4 . 3 . 1 . 2 . . 1 . /. . . . . . . . . 3 . . 1 /. . . . 2 . 3 . 2 . . . . /2 . 3 '
        '. . 2 . . . 3 . 1 . /. . . . 2 . 5 . 3 . 4 . . /1 . 5 . . 2 . 1 . . . 2 . /. . . . . . 2 . 2 . 4 . 2 /. . 4 . '
        '4 . . 3 . . . 3 . /. . . . . . . . . . . . . /2 . 2 . 3 . . . 3 . 2 . 3 /. . . . . 2 . 4 . 4 . 3 . /. . 1 . 2 '
        '. . . . . . . . /3 . . . . 3 . 1 . 2 . . 2 /1 1 2 2 0 0 0 0 1 1 1 0 /0 0 0 0 0 0 0 0 0 1 1 1 /0 0 0 0 1 1 1 1 '
        '0 0 0 0 /0 0 1 1 1 1 1 1 1 0 0 0 /0 0 0 0 2 2 1 1 2 2 0 0 /0 0 2 2 2 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 1 1 0 0 /0'
        ' 0 1 1 2 2 2 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 0 /1 1 0 0 1 1 1 1 1 1 0 0 /0 0 0 0 0 1 1 2 2 1 1 0 /0 0 1 1 0 0'
        ' 0 0 0 0 0 0 /2 2 2 2 2 0 0 0 0 1 1 1 /1 0 1 0 1 0 1 0 1 0 0 0 0 /1 0 1 0 1 0 1 0 1 2 0 0 0 /1 0 1 0 0 0 0 0 0'
        ' 2 0 0 0 /1 0 1 0 0 0 0 0 0 0 0 1 0 /1 0 1 0 0 0 2 0 0 0 2 1 0 /0 0 2 0 0 0 2 1 0 0 2 1 0 /0 0 2 0 0 0 0 1 1 0'
        ' 1 1 2 /0 0 1 0 1 0 0 0 1 0 1 2 2 /0 0 1 0 1 0 0 0 1 0 1 2 2 /1 0 0 0 1 0 0 0 0 0 0 2 1 /1 0 0 0 1 1 0 1 0 1 0'
        ' 0 1 /1 0 0 0 0 1 0 1 0 1 0 0 1 /',
    ),
    (
        'pzprv3/heteromino/10/10/. . . . . . . . . . /. . * * * * * . . . /. . . . . . . . * . /. . . * * * * . . . /* '
        '* . . . . . . . * /. . . * . . * * . . /. * * . . * . . * . /. * * . . . . . . . /. . . . . * * * . . /. . . .'
        ' . * * * . . /0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 /0 0 '
        '0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 0 '
        '/0 0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 /0 '
        '0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 /0 0 0 0'
        ' 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 /',
        'pzprv3/heteromino/10/10/. . . . . . . . . . /. . * * * * * . . . /. . . . . . . . * . /. . . * * * * . . . /* '
        '* . . . . . . . * /. . . * . . * * . . /. * * . . * . . * . /. * * . . . . . . . /. . . . . * * * . . /. . . .'
        ' . * * * . . /1 1 0 1 0 0 1 0 1 0 1 /1 1 1 0 0 0 0 1 1 1 1 /1 1 1 0 1 0 0 1 1 1 1 /1 0 1 1 0 0 0 1 0 1 1 /0 0 '
        '1 1 0 1 0 1 0 1 0 /1 1 0 1 1 1 1 0 1 1 1 /1 1 0 1 1 1 1 0 1 1 1 /1 1 0 1 1 0 1 1 0 1 1 /1 1 0 1 1 1 0 0 1 1 1 '
        '/1 0 1 1 0 1 0 0 1 0 1 /1 1 1 1 1 1 1 1 1 1 /0 0 1 1 1 1 1 0 0 1 /0 1 1 1 1 1 1 1 1 0 /1 0 0 1 1 1 1 0 1 0 /1 '
        '1 1 1 1 1 1 1 1 1 /1 1 0 1 0 0 1 1 0 1 /0 1 1 1 1 1 1 1 1 0 /0 0 0 0 0 1 0 1 1 0 /1 1 1 0 1 1 1 1 0 1 /0 1 0 1'
        ' 0 0 0 0 1 0 /1 1 1 1 1 0 0 0 1 1 /',
    ),
    (
        'pzprv3/heyawake/7/7/14/0 1 2 2 3 4 4 /0 1 2 2 3 4 4 /0 1 5 5 6 6 6 /7 7 5 5 6 6 6 /7 7 8 9 9 10 10 /7 7 8 9 9 '
        '10 10 /11 11 11 9 9 12 13 /2 . . . . 2 . /. . . . . . . /. . 2 . 1 . . /. . . . . . . /. . . 1 . 0 . /. . . . '
        '. . . /1 . . . . 1 0 /. . . . . . . /. . . . . . . /. . . . . . . /. . . . . . . /. . . . . . . /. . . . . . .'
        ' /. . . . . . . /',
        'pzprv3/heyawake/7/7/14/0 1 2 2 3 4 4 /0 1 2 2 3 4 4 /0 1 5 5 6 6 6 /7 7 5 5 6 6 6 /7 7 8 9 9 10 10 /7 7 8 9 9 '
        '10 10 /11 11 11 9 9 12 13 /2 . . . . 2 . /. . . . . . . /. . 2 . 1 . . /. . . . . . . /. . . 1 . 0 . /. . . . '
        '. . . /1 . . . . 1 0 /# + + # + + # /+ + # + + # + /# + + # + + + /+ + # + + + # /+ # + + # + + /+ + # + + + +'
        ' /# + + + + # + /',
    ),
    (
        'pzprv3/hitori/8/8/4 8 1 6 3 2 5 7 /3 6 7 2 1 6 5 4 /2 3 4 8 2 8 6 1 /4 1 6 5 7 7 3 5 /7 2 3 1 8 5 1 2 /3 5 6 7'
        ' 3 1 8 4 /6 4 2 3 5 4 7 8 /8 7 1 4 2 3 5 6 /. . . . . . . . /. . . . . . . . /. . . . . . . . /. . . . . . . .'
        ' /. . . . . . . . /. . . . . . . . /. . . . . . . . /. . . . . . . . /',
        'pzprv3/hitori/8/8/4 8 1 6 3 2 5 7 /3 6 7 2 1 6 5 4 /2 3 4 8 2 8 6 1 /4 1 6 5 7 7 3 5 /7 2 3 1 8 5 1 2 /3 5 6 7'
        ' 3 1 8 4 /6 4 2 3 5 4 7 8 /8 7 1 4 2 3 5 6 /# 8 # 6 3 2 # 7 /3 6 7 2 1 # 5 4 /# 3 4 # 2 8 6 1 /4 1 # 5 7 # 3 #'
        ' /7 # 3 # 8 5 1 2 /# 5 6 7 # 1 8 # /6 # 2 3 5 4 7 8 /8 7 1 4 # 3 # 6 /',
    ),
    (
        'pzprv3/kakuro/7/7/0 23 30 -1 -1 27 12 16 /16 . . -1,-1 24,17 . . . /17 . . 29,15 . . . . /35 . . . . . -1,12 -'
        '1,-1 /-1 7,-1 . . 8,7 . . -1,7 /-1 -1,11 16,10 . . . . . /21 . . . . 5,-1 . . /6 . . . -1,-1 3,-1 . . /. . . .'
        ' . . . /. . . . . . . /. . . . . . . /. . . . . . . /. . . . . . . /. . . . . . . /. . . . . . . /',
        'pzprv3/kakuro/7/7/0 23 30 -1 -1 27 12 16 /16 . . -1,-1 24,17 . . . /17 . . 29,15 . . . . /35 . . . . . -1,12 -'
        '1,-1 /-1 7,-1 . . 8,7 . . -1,7 /-1 -1,11 16,10 . . . . . /21 . . . . 5,-1 . . /6 . . . -1,-1 3,-1 . . /9 7 1 1'
        ' 8 7 9 /8 9 1 8 9 5 7 /6 8 5 9 7 1 1 /1 6 1 1 2 6 1 /1 1 4 6 1 3 2 /8 9 3 1 1 1 4 /3 1 2 1 1 2 1 /',
    ),
    (
        'pzprv3/kropki/4/4/0 0 1 /1 2 1 /1 2 1 /1 0 0 /0 2 1 1 /0 2 2 0 /1 1 1 0 /. . . . /. . . . /. . . . /. . . . /',
        'pzprv3/kropki/4/4/0 0 1 /1 2 1 /1 2 1 /1 0 0 /0 2 1 1 /0 2 2 0 /1 1 1 0 /4 1 3 2 /1 2 4 3 /3 4 2 1 /2 3 1 4 /',
    ),
    (
        'pzprv3/lightup/10/10/- . . - . . . . . - /. . . . . . . - . . /. 3 . . . . 0 . . . /. . 2 . . - . . . 1 /. . .'
        ' 1 0 - . . . . /. . . . 1 - - . . . /- . . . 2 . . 2 . . /. . . - . . . . - . /. . 1 . . . . . . . /0 . . . . '
        '. 1 . . 0 /',
        'pzprv3/lightup/10/10/- # + - # + + + + - /+ + + # + + + - + + /# 3 # + + + 0 + + # /+ # 2 + + - + + + 1 /+ + +'
        ' 1 0 - # + + + /+ + + # 1 - - # + + /- + # + 2 # + 2 # + /# + + - # + + + - # /+ + 1 + + + + + # + /0 + # + + '
        '+ 1 # + 0 /',
    ),
    (
        'pzprv3/lits/10/10/13/0 0 0 0 0 1 2 2 2 2 /0 3 0 0 0 1 1 4 4 4 /0 3 0 0 0 0 1 4 5 5 /0 3 0 1 1 1 1 4 4 5 /0 3 3'
        ' 6 6 6 6 4 5 5 /7 7 7 7 7 7 6 5 5 5 /8 8 7 7 7 6 6 5 5 9 /10 8 8 10 10 10 11 5 9 9 /10 10 10 10 10 10 11 5 5 9'
        ' /12 12 12 12 10 11 11 11 5 5 /. . . . . . . . . . /. . . . . . . . . . /. . . . . . . . . . /. . . . . . . . '
        '. . /. . . . . . . . . . /. . . . . . . . . . /. . . . . . . . . . /. . . . . . . . . . /. . . . . . . . . . /'
        '. . . . . . . . . . /',
        'pzprv3/lits/10/10/13/0 0 0 0 0 1 2 2 2 2 /0 3 0 0 0 1 1 4 4 4 /0 3 0 0 0 0 1 4 5 5 /0 3 0 1 1 1 1 4 4 5 /0 3 3'
        ' 6 6 6 6 4 5 5 /7 7 7 7 7 7 6 5 5 5 /8 8 7 7 7 6 6 5 5 9 /10 8 8 10 10 10 11 5 9 9 /10 10 10 10 10 10 11 5 5 9'
        ' /12 12 12 12 10 11 11 11 5 5 /+ + + + + + # # # # /+ + + # # + + # + + /+ # # # + + + # + # /+ # + # # # # # '
        '# # /+ # # + + + # + + # /+ + # # # + # + + # /# # + # + # # + + # /+ # # # # + + + # # /+ + + + # + # + + # /'
        '# # # # # # # # + + /',
    ),
    (
        'pzprv3/mashu/10/10/. . 1 . 1 . . . . . /. . . . 1 . . . 2 . /. . 2 . 2 . 1 . . . /. . . 1 . . 1 . . . /2 . . .'
        ' . 1 . . . 1 /. . 1 . . . . 1 . . /. . 2 . . . 1 . . . /1 . . . 2 . . . . 1 /. . . . . . 1 1 . . /. . 2 . . . '
        '. . . 2 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0 0 0 '
        '0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 /'
        '0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 /0 0 0'
        ' 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 0 /',
        'pzprv3/mashu/10/10/. . 1 . 1 . . . . . /. . . . 1 . . . 2 . /. . 2 . 2 . 1 . . . /. . . 1 . . 1 . . . /2 . . .'
        ' . 1 . . . 1 /. . 1 . . . . 1 . . /. . 2 . . . 1 . . . /1 . . . 2 . . . . 1 /. . . . . . 1 1 . . /. . 2 . . . '
        '. . . 2 /0 1 1 1 1 0 1 1 1 /1 0 0 1 1 0 1 1 0 /1 1 0 0 1 1 1 0 0 /0 0 0 0 0 1 1 0 0 /1 1 0 1 0 0 0 1 0 /0 1 1 '
        '1 0 0 0 0 1 /0 0 1 1 0 1 1 0 1 /0 0 0 0 1 1 1 1 0 /1 0 0 0 0 1 1 1 0 /0 0 1 1 0 1 1 1 1 /0 1 0 0 0 1 1 0 0 1 /'
        '1 0 0 1 0 0 0 0 1 1 /0 0 1 1 1 0 0 1 1 1 /0 0 1 1 1 1 0 0 1 1 /1 0 0 0 0 1 0 1 0 1 /1 1 0 0 1 1 0 1 1 0 /1 1 1'
        ' 0 0 0 0 0 0 1 /1 1 1 0 1 0 0 0 1 1 /0 0 1 0 1 1 0 0 0 1 /',
    ),
    (
        'pzprv3/mines/10/10/. . . . . . . . . . /. 3 4 5 . . 5 3 1 . /. 2 . . . . . . 2 . /. 1 . 2 2 2 2 . 4 . /. . . 2'
        ' . . 2 . . . /. . . 2 . . 2 . . . /. 4 . 2 2 2 2 . 1 . /. 2 . . . . . . 2 . /. 1 2 4 . . 1 2 4 . /. . . . . . '
        '. . . . /. . . . . . . . . . /. . . . . . . . . . /. . . . . . . . . . /. . . . . . . . . . /. . . . . . . . .'
        ' . /. . . . . . . . . . /. . . . . . . . . . /. . . . . . . . . . /. . . . . . . . . . /. . . . . . . . . . /',
        'pzprv3/mines/10/10/. . . . . . . . . . /. 3 4 5 . . 5 3 1 . /. 2 . . . . . . 2 . /. 1 . 2 2 2 2 . 4 . /. . . 2'
        ' . . 2 . . . /. . . 2 . . 2 . . . /. 4 . 2 2 2 2 . 1 . /. 2 . . . . . . 2 . /. 1 2 4 . . 1 2 4 . /. . . . . . '
        '. . . . /+ # # # # # # # + + /# + + + # # + + + + /+ + + # + + # + + + /# + + + + + + # + # /+ + + + # + + + #'
        ' # /# # + + # # + + + + /# + + + + + + # + + /+ + # + + + + + + + /+ + + + # + + + + # /+ + + # # + + # # # /',
    ),
    (
        'pzprv3/nonogram/11/8/. . . . . . . . . . . . /. . . . . . . . . . . . /. . . . . . . . . . . . /. . . . . . . '
        '. . . . . /. . . . . . . 2 2 . . . /. . . . . 9 9 2 2 4 4 . /. . . . . . . . . . . . /. . . 4 . . . . . . . . '
        '/. . . 6 . . . . . . . . /. . 2 2 . . . . . . . . /. . 2 2 . . . . . . . . /. . . 6 . . . . . . . . /. . . 4 .'
        ' . . . . . . . /. . . 2 . . . . . . . . /. . . 2 . . . . . . . . /. . . 2 . . . . . . . . /. . . . . . . . . .'
        ' . . /',
        'pzprv3/nonogram/11/8/. . . . . . . . . . . . /. . . . . . . . . . . . /. . . . . . . . . . . . /. . . . . . . '
        '. . . . . /. . . . . . . 2 2 . . . /. . . . . 9 9 2 2 4 4 . /. . . . + + + + + + + + /. . . 4 + # # # # + + + '
        '/. . . 6 + # # # # # # + /. . 2 2 + # # + + # # + /. . 2 2 + # # + + # # + /. . . 6 + # # # # # # + /. . . 4 +'
        ' # # # # + + + /. . . 2 + # # + + + + + /. . . 2 + # # + + + + + /. . . 2 + # # + + + + + /. . . . + + + + + +'
        ' + + /',
    ),
    (
        'pzprv3/nurikabe/9/10/2 . . . . . . . . 2 /. . . . . . 2 . . . /. 2 . . 7 . . . . . /. . . . . . . . . . /. . .'
        ' . . . 3 . 3 . /. . 2 . . . . 3 . . /2 . . 4 . . . . . . /. . . . . . . . . . /. 1 . . . . 2 . 4 . /',
        'pzprv3/nurikabe/9/10/2 + # + + + # # + 2 /# # # + + # 2 # # # /# 2 # + 7 # + # + # /# + # # # # # # + # /# # +'
        ' # + + 3 # 3 # /+ # 2 # # # # 3 # # /2 # # 4 + # + + # + /# # + + # # # # # + /# 1 # # # + 2 # 4 + /',
    ),
    (
        'pzprv3/skyscrapers/5/5/. 4 2 1 2 3 . /3 . . . . . 3 /2 . . . . . 4 /3 . . . . . 1 /2 . . . . . 2 /1 . . . . . '
        '2 /. 1 4 3 2 2 . /',
        'pzprv3/skyscrapers/5/5/. 4 2 1 2 3 . /3 2 3 5 4 1 3 /2 1 5 4 3 2 4 /3 3 4 2 1 5 1 /2 4 2 1 5 3 2 /1 5 1 3 2 4 '
        '2 /. 1 4 3 2 2 . /',
    ),
    (
        'pzprv3.1/slither/6/6/. . . . 0 . /3 3 . . 1 . /. . 1 2 . . /. . 2 0 . . /. 1 . . 1 1 /. 2 . . . . /0 0 0 0 0 0'
        ' /0 0 0 0 0 0 /0 0 0 0 0 0 /0 0 0 0 0 0 /0 0 0 0 0 0 /0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0'
        ' /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 /0 0 0 0 0 0 /0 0 0 0 0 0 /0 0 0 0 0 0 /0 0 0 0 0 0'
        ' /0 0 0 0 0 0 /0 0 0 0 0 0 /',
        'pzprv3.1/slither/6/6/. . . . 0 . /3 3 . . 1 . /. . 1 2 . . /. . 2 0 . . /. 1 . . 1 1 /. 2 . . . . /0 0 0 0 0 0'
        ' /0 0 0 0 0 0 /0 0 0 0 0 0 /0 0 0 0 0 0 /0 0 0 0 0 0 /0 0 0 0 0 0 /1 0 0 1 0 0 0 /1 1 1 1 0 1 1 /0 0 1 0 1 1 1'
        ' /0 0 1 0 0 0 1 /0 0 0 1 0 0 1 /1 0 0 0 1 1 1 /1 1 1 0 0 0 /0 1 0 0 0 1 /1 0 0 1 0 0 /0 0 0 0 1 0 /0 0 1 0 0 0'
        ' /1 1 1 0 1 0 /1 1 1 1 0 1 /',
    ),
    (
        'pzprv3/starbattle/10/10/2/10/0 0 0 0 0 1 1 2 2 2 /0 0 0 0 0 1 1 1 2 2 /0 0 0 0 0 1 1 1 1 1 /3 3 3 0 4 4 1 1 1 '
        '5 /3 6 6 6 4 4 1 1 5 5 /6 6 6 6 4 4 1 5 5 5 /6 6 6 6 6 7 1 5 5 5 /6 6 6 6 6 7 1 5 5 7 /8 8 8 7 7 7 7 7 7 7 /7 '
        '7 7 7 9 9 9 9 9 9 /. . . . . . . . . . /. . . . . . . . . . /. . . . . . . . . . /. . . . . . . . . . /. . . .'
        ' . . . . . . /. . . . . . . . . . /. . . . . . . . . . /. . . . . . . . . . /. . . . . . . . . . /. . . . . . '
        '. . . . /',
        'pzprv3/starbattle/10/10/2/10/0 0 0 0 0 1 1 2 2 2 /0 0 0 0 0 1 1 1 2 2 /0 0 0 0 0 1 1 1 1 1 /3 3 3 0 4 4 1 1 1 '
        '5 /3 6 6 6 4 4 1 1 5 5 /6 6 6 6 4 4 1 5 5 5 /6 6 6 6 6 7 1 5 5 5 /6 6 6 6 6 7 1 5 5 7 /8 8 8 7 7 7 7 7 7 7 /7 '
        '7 7 7 9 9 9 9 9 9 /+ + + + + + + # + # /+ # + # + + + + + + /+ + + + + + # + # + /+ + # + # + + + + + /# + + +'
        ' + + + + # + /+ + + # + # + + + + /+ # + + + + + # + + /+ + + + + # + + + # /# + # + + + + + + + /+ + + + # + '
        '# + + + /',
    ),
    (
        'pzprv3/sudoku/9/5 3 . . 7 . . . . /6 . . 1 9 5 . . . /. 9 8 . . . . 6 . /. . . . 6 . . . 3 /4 . . 8 . 3 . . 1 '
        '/7 . . . 2 . . . 6 /. 6 . . . . 2 8 . /. . . 4 1 9 . . 5 /. . . . 8 . . 7 9 /. . . . . . . . . /. . . . . . . '
        '. . /. . . . . . . . . /. . . . . . . . . /. . . . . . . . . /. . . . . . . . . /. . . . . . . . . /. . . . . '
        '. . . . /. . . . . . . . . /',
        'pzprv3/sudoku/9/5 3 . . 7 . . . . /6 . . 1 9 5 . . . /. 9 8 . . . . 6 . /. . . . 6 . . . 3 /4 . . 8 . 3 . . 1 '
        '/7 . . . 2 . . . 6 /. 6 . . . . 2 8 . /. . . 4 1 9 . . 5 /. . . . 8 . . 7 9 /. . 4 6 . 8 9 1 2 /. 7 2 . . . 3 '
        '4 8 /1 . . 3 4 2 5 . 7 /8 5 9 7 . 1 4 2 . /. 2 6 . 5 . 7 9 . /. 1 3 9 . 4 8 5 . /9 . 1 5 3 7 . . 4 /2 8 7 . . '
        '. 6 3 . /3 4 5 2 . 6 1 . . /',
    ),
    (
        'pzprv3/tapa/10/10/. . . 1,1 . . . . . . /1 . . . . . 2,2 . . 2 /. . . . . . . . . . /. . . 1 . . . . . . /. . '
        '1,1 . . 2 . 2,2 . . /. . 4 . 4 . . 3 . . /. . . . . . 3 . . . /. . . . . . . . . . /4 . . 4 . . . . . 3 /. . .'
        ' . . . 3 . . . /',
        'pzprv3/tapa/10/10/+ + + 1,1 + + + + + + /1 + # + # # 2,2 # + 2 /+ # # + + # + # # # /# # + 1 + # # # + # /# + '
        '1,1 + + 2 + 2,2 # # /# + 4 # 4 + + 3 # + /# # # # # # 3 + # + /+ # + + + # # + # # /4 # + 4 # + # # # 3 /# # #'
        ' # # + 3 # + + /',
    ),
    (
        'pzprv3/tentaisho/7/7/.....1......1/1............/............./.........1.../....1......../............./.....'
        '......../............./..1.........1/........1..../..1........../1............/.........1.../0 0 0 0 0 0 /0 0 '
        '0 0 0 0 /0 0 0 0 0 0 /0 0 0 0 0 0 /0 0 0 0 0 0 /0 0 0 0 0 0 /0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 '
        '0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0'
        ' 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /',
        'pzprv3/tentaisho/7/7/.....1......1/1............/............./.........1.../....1......../............./.....'
        '......../............./..1.........1/........1..../..1........../1............/.........1.../1 0 0 0 1 1 /1 0 '
        '0 1 0 0 /0 1 1 0 0 1 /1 0 0 1 1 1 /0 0 1 0 0 1 /1 1 1 0 0 1 /1 0 1 1 0 1 /0 1 1 1 1 0 1 /1 1 0 1 0 0 1 /0 1 0 '
        '1 0 1 0 /0 1 1 1 1 0 0 /1 1 0 0 0 0 0 /0 1 0 0 1 1 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0'
        ' 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /',
    ),
    (
        'pzprv3/tents/8/8/. 2 1 3 1 1 2 0 2 /2 . . . . . . . . /0 . . 1 . . 1 . 1 /3 . . . . 1 . . . /1 . 1 1 . . . . .'
        ' /0 1 . . . . . . . /2 . . . 1 . . . . /1 . . . . . 1 . . /3 . 1 . 1 . . 1 . /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 '
        '0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0'
        ' 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /',
        'pzprv3/tents/8/8/. 2 1 3 1 1 2 0 2 /2 . . A . . A . . /0 . . 1 . . 1 . 1 /3 . A . . 1 A . A /1 . 1 1 A . . . .'
        ' /0 1 . . . . . . . /2 A . A 1 . . . . /1 . . . . A 1 . . /3 A 1 A 1 . . 1 A /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 '
        '0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0'
        ' 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /',
    ),
    (
        'pzprv3/yajilin/9/9/. . . . . . . . . /. . . . 4,1 . 2,1 . . /. . . 2,2 . . . 2,2 . /. . . . . . . . . /. . . .'
        ' . . . . . /. . . . . . . . . /. 4,0 . . . 1,2 . . . /. . 1,3 . 3,2 . . . . /. . . . . . . . . /. . . . . . . '
        '. . /. . . . . . . . . /. . . . . . . . . /. . . . . . . . . /. . . . . . . . . /. . . . . . . . . /. . . . . '
        '. . . . /. . . . . . . . . /. . . . . . . . . /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 '
        '0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0'
        ' 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 0 /0 0 0 0 0 0 0 0 '
        '0 /0 0 0 0 0 0 0 0 0 /',
        'pzprv3/yajilin/9/9/. . . . . . . . . /. . . . 4,1 . 2,1 . . /. . . 2,2 . . . 2,2 . /. . . . . . . . . /. . . .'
        ' . . . . . /. . . . . . . . . /. 4,0 . . . 1,2 . . . /. . 1,3 . 3,2 . . . . /. . . . . . . . . /. . # . . . . '
        '. # /. . . . . # . . . /. . # . . . # . . /# . . . . . . # . /. . # . . # . . . /. . . # . . . . . /. . . . . '
        '. . . . /. # . # . . . # . /. . . . . . . . . /1 0 0 1 1 1 1 0 /0 1 1 0 0 0 0 1 /1 0 0 0 1 0 0 0 /0 1 1 0 0 1 '
        '0 0 /1 0 0 1 0 0 1 0 /0 1 0 0 1 1 0 0 /0 0 1 1 0 0 1 0 /0 0 0 0 0 1 0 0 /1 1 1 1 1 0 1 1 /1 1 0 1 0 0 0 1 0 /1'
        ' 0 0 0 0 0 0 0 1 /0 1 0 0 1 1 0 0 1 /0 0 0 1 1 0 1 0 1 /1 1 0 0 0 0 0 1 1 /1 0 1 0 1 0 1 1 1 /1 0 0 0 0 0 0 0 '
        '1 /1 0 0 0 0 1 1 0 1 /',
    ),
    (
        'pzprv3/yinyang/7/7/. . . . . . . /. . 1 . 2 . . /. . . 2 . 1 1 /. 1 . . 1 2 . /. 2 1 . 1 . . /. . . 2 . . 2 /1'
        ' 2 . . . . . /. . . . . . . /. . . . . . . /. . . . . . . /. . . . . . . /. . . . . . . /. . . . . . . /. . . '
        '. . . . /',
        'pzprv3/yinyang/7/7/. . . . . . . /. . 1 . 2 . . /. . . 2 . 1 1 /. 1 . . 1 2 . /. 2 1 . 1 . . /. . . 2 . . 2 /1'
        ' 2 . . . . . /1 1 1 1 1 1 1 /1 2 . 2 . 2 1 /1 2 2 . 1 . . /1 . 1 2 . . 1 /1 . . 2 . 2 2 /1 2 1 . 1 1 . /. . 2 '
        '2 2 2 2 /',
    ),
]


def get_demo(puzzle_type):
    return next(demo for demo in DEMOS if _get_puzzle_type(demo[0]) == puzzle_type)


def puzzle_list():
    return [{'type': puzzle[0], 'name': puzzle[1], 'demo': get_demo(puzzle[0])[0]} for puzzle in PUZZLES]


def solve(pzprv3: str):
    return next(puzzle[2] for puzzle in PUZZLES if puzzle[0] == _get_puzzle_type(pzprv3))(pzprv3).solve()


def _get_puzzle_type(pzprv3):
    matched = match('pzprv3[^/]*/([^/]+)/.*', pzprv3)
    return matched.group(1)
