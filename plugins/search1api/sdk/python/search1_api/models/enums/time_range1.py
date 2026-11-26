from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TimeRange1(str, Enum):
    """Publication window applied, or null for none."""

    DAY = "day"
    WEEK = "week"
    MONTH = "month"
    YEAR = "year"

    __str__ = str.__str__


TimeRange1OrStr: TypeAlias = Annotated[TimeRange1 | str, open_enum_validator(TimeRange1)]
