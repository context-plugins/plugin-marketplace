from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Interval1(str, Enum):
    DAY = "day"
    WEEK = "week"
    MONTH = "month"

    __str__ = str.__str__


Interval1OrStr: TypeAlias = Annotated[Interval1 | str, open_enum_validator(Interval1)]
