from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Order9(str, Enum):
    """The order to sort the list. You can specify ascending or descending order."""

    ASCENDING = "Ascending"
    DESCENDING = "Descending"

    __str__ = str.__str__


Order9OrStr: TypeAlias = Annotated[Order9 | str, open_enum_validator(Order9)]
