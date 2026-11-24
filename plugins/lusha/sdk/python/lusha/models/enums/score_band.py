from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ScoreBand(str, Enum):
    """Qualitative score band."""

    COLD = "cold"
    WARM = "warm"
    HOT = "hot"

    __str__ = str.__str__


ScoreBandOrStr: TypeAlias = Annotated[ScoreBand | str, open_enum_validator(ScoreBand)]
