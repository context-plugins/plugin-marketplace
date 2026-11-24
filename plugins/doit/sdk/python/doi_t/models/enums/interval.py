from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Interval(str, Enum):
    """Bucket interval used for the trend series."""

    DAY = "day"
    WEEK = "week"
    MONTH = "month"

    __str__ = str.__str__


IntervalOrStr: TypeAlias = Annotated[Interval | str, open_enum_validator(Interval)]
