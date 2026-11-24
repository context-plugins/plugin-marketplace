from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DayOfWeek(str, Enum):
    """The day of week to use for time alignment during aggregation. The day must be in uppercase."""

    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"
    SUNDAY = "SUNDAY"

    __str__ = str.__str__


DayOfWeekOrStr: TypeAlias = Annotated[DayOfWeek | str, open_enum_validator(DayOfWeek)]
