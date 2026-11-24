from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TimeInterval(str, Enum):
    """The period each evaluation looks at."""

    DAY = "day"
    WEEK = "week"
    MONTH = "month"
    QUARTER = "quarter"
    YEAR = "year"

    __str__ = str.__str__


TimeIntervalOrStr: TypeAlias = Annotated[TimeInterval | str, open_enum_validator(TimeInterval)]
