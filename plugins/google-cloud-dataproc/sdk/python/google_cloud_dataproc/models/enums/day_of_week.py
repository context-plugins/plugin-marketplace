from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DayOfWeek(str, Enum):
    """Optional. The day of week, when the window starts."""

    DAY_OF_WEEK_UNSPECIFIED = "DAY_OF_WEEK_UNSPECIFIED"
    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"
    SUNDAY = "SUNDAY"

    __str__ = str.__str__


DayOfWeekOrStr: TypeAlias = Annotated[DayOfWeek | str, open_enum_validator(DayOfWeek)]
