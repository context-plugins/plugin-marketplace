from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Day(str, Enum):
    """Required. Preferred day of the week for maintenance, e.g. MONDAY, TUESDAY, etc."""

    DAY_OF_WEEK_UNSPECIFIED = "DAY_OF_WEEK_UNSPECIFIED"
    MONDAY = "MONDAY"
    TUESDAY = "TUESDAY"
    WEDNESDAY = "WEDNESDAY"
    THURSDAY = "THURSDAY"
    FRIDAY = "FRIDAY"
    SATURDAY = "SATURDAY"
    SUNDAY = "SUNDAY"

    __str__ = str.__str__


DayOrStr: TypeAlias = Annotated[Day | str, open_enum_validator(Day)]
