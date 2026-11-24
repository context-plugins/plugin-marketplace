from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Order10(str, Enum):
    """The order by which to sort the generation request information."""

    ASCENDING = "Ascending"
    DESCENDING = "Descending"

    __str__ = str.__str__


Order10OrStr: TypeAlias = Annotated[Order10 | str, open_enum_validator(Order10)]
