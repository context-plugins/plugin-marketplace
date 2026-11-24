from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TimeDimension(str, Enum):
    """The type of time period that the timeValue field represents."""

    HOURS = "Hours"
    DAYS = "Days"
    WEEKS = "Weeks"

    __str__ = str.__str__


TimeDimensionOrStr: TypeAlias = Annotated[TimeDimension | str, open_enum_validator(TimeDimension)]
