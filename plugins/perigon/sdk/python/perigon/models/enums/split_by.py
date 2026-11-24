from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SplitBy(str, Enum):
    HOUR = "hour"
    DAY = "day"
    WEEK = "week"
    MONTH = "month"

    __str__ = str.__str__


SplitByOrStr: TypeAlias = Annotated[SplitBy | str, open_enum_validator(SplitBy)]
