from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TimeUnit(str, Enum):
    """the unit of time queried for (minute, hour, day, week, month)"""

    MINUTE = "minute"
    HOUR = "hour"
    DAY = "day"
    WEEK = "week"
    MONTH = "month"

    __str__ = str.__str__


TimeUnitOrStr: TypeAlias = Annotated[TimeUnit | str, open_enum_validator(TimeUnit)]
