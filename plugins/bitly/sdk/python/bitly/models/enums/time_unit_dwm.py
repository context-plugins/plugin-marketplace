from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TimeUnitDwm(str, Enum):
    """the unit of time queried for (day, week, month)"""

    DAY = "day"
    WEEK = "week"
    MONTH = "month"

    __str__ = str.__str__


TimeUnitDwmOrStr: TypeAlias = Annotated[TimeUnitDwm | str, open_enum_validator(TimeUnitDwm)]
