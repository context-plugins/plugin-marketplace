from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Order13(str, Enum):
    """The order to sort the list. You can say ascending or descending."""

    ASCENDING = "Ascending"
    DESCENDING = "Descending"

    __str__ = str.__str__


Order13OrStr: TypeAlias = Annotated[Order13 | str, open_enum_validator(Order13)]
