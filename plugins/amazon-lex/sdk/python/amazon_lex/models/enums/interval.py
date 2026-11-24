from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Interval(str, Enum):
    """Specifies the interval of time by which to bin the analytics data."""

    ONE_HOUR = "OneHour"
    ONE_DAY = "OneDay"

    __str__ = str.__str__


IntervalOrStr: TypeAlias = Annotated[Interval | str, open_enum_validator(Interval)]
