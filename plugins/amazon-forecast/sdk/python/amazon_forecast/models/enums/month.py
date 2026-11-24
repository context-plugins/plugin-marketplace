from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Month(str, Enum):
    """The month to use for time alignment during aggregation. The month must be in uppercase."""

    JANUARY = "JANUARY"
    FEBRUARY = "FEBRUARY"
    MARCH = "MARCH"
    APRIL = "APRIL"
    MAY = "MAY"
    JUNE = "JUNE"
    JULY = "JULY"
    AUGUST = "AUGUST"
    SEPTEMBER = "SEPTEMBER"
    OCTOBER = "OCTOBER"
    NOVEMBER = "NOVEMBER"
    DECEMBER = "DECEMBER"

    __str__ = str.__str__


MonthOrStr: TypeAlias = Annotated[Month | str, open_enum_validator(Month)]
