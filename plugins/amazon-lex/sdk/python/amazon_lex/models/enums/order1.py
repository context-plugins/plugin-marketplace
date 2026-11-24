from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Order1(str, Enum):
    """Specifies whether to bin the analytics data in ascending or descending order. If this field is left blank, the
    default order is by the key of the bin in descending order."""

    ASCENDING = "Ascending"
    DESCENDING = "Descending"

    __str__ = str.__str__


Order1OrStr: TypeAlias = Annotated[Order1 | str, open_enum_validator(Order1)]
