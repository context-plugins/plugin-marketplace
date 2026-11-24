from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Unit1(str, Enum):
    """Time interval unit for shifting."""

    DAY = "day"
    MONTH = "month"
    QUARTER = "quarter"
    YEAR = "year"

    __str__ = str.__str__


Unit1OrStr: TypeAlias = Annotated[Unit1 | str, open_enum_validator(Unit1)]
