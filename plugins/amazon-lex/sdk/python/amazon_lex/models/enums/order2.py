from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Order2(str, Enum):
    """Specifies whether to sort the results in ascending or descending order."""

    ASCENDING = "Ascending"
    DESCENDING = "Descending"

    __str__ = str.__str__


Order2OrStr: TypeAlias = Annotated[Order2 | str, open_enum_validator(Order2)]
