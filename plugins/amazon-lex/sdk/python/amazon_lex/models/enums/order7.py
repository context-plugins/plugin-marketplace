from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Order7(str, Enum):
    """The order to sort the list. You can choose ascending or descending."""

    ASCENDING = "Ascending"
    DESCENDING = "Descending"

    __str__ = str.__str__


Order7OrStr: TypeAlias = Annotated[Order7 | str, open_enum_validator(Order7)]
