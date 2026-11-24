from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ScoreBand1(str, Enum):
    COLD = "cold"
    WARM = "warm"
    HOT = "hot"

    __str__ = str.__str__


ScoreBand1OrStr: TypeAlias = Annotated[ScoreBand1 | str, open_enum_validator(ScoreBand1)]
