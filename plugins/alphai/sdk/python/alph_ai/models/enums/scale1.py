from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Scale1(str, Enum):
    """The multiplier ``numeric`` is expressed in, by the same rules as a ``key_metrics`` row. A bare segment figure
    takes the table header's scale only when the segments then fit under the read's own revenue line; otherwise null.
    Added 2026-10-01 to every stored read."""

    ONES = "ones"
    THOUSANDS = "thousands"
    MILLIONS = "millions"
    BILLIONS = "billions"
    TRILLIONS = "trillions"

    __str__ = str.__str__


Scale1OrStr: TypeAlias = Annotated[Scale1 | str, open_enum_validator(Scale1)]
