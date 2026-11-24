from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class WindowSize(str, Enum):
    """Time buckets to group the stats by."""

    WINDOW_SIZE_UNSPECIFIED = "WINDOW_SIZE_UNSPECIFIED"
    MINUTE = "MINUTE"
    HOUR = "HOUR"
    DAY = "DAY"
    MONTH = "MONTH"

    __str__ = str.__str__


WindowSizeOrStr: TypeAlias = Annotated[WindowSize | str, open_enum_validator(WindowSize)]
