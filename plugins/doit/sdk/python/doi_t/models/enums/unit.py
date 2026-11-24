from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Unit(str, Enum):
    """Time unit for the time range."""

    DAY = "day"
    WEEK = "week"
    MONTH = "month"
    QUARTER = "quarter"
    YEAR = "year"

    __str__ = str.__str__


UnitOrStr: TypeAlias = Annotated[Unit | str, open_enum_validator(Unit)]
