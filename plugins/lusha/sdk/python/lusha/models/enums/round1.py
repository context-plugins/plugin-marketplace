from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Round1(str, Enum):
    PRE_SEED = "pre_seed"
    SEED = "seed"
    SERIES_A = "series_a"
    SERIES_B = "series_b"
    SERIES_C = "series_c"
    SERIES_D = "series_d"
    SERIES_E = "series_e"
    SERIES_F = "series_f"
    SERIES_G = "series_g"
    SERIES_H = "series_h"
    OTHER = "other"

    __str__ = str.__str__


Round1OrStr: TypeAlias = Annotated[Round1 | str, open_enum_validator(Round1)]
