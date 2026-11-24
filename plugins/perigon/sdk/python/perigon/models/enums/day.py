from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Day(str, Enum):
    """Days when a WEEKLY schedule runs. Requires 1 through 7 values from MONDAY through SUNDAY."""

    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"
    SUNDAY = "SUNDAY"

    __str__ = str.__str__


DayOrStr: TypeAlias = Annotated[Day | str, open_enum_validator(Day)]
