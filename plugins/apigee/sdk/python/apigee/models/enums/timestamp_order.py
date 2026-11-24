from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TimestampOrder(str, Enum):
    """Order the sequences in increasing or decreasing order of timestamps. Default is descending order of timestamps
    (latest first)."""

    ORDER_UNSPECIFIED = "ORDER_UNSPECIFIED"
    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

    __str__ = str.__str__


TimestampOrderOrStr: TypeAlias = Annotated[TimestampOrder | str, open_enum_validator(TimestampOrder)]
