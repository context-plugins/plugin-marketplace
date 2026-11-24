from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Order8(str, Enum):
    """The order of the sort category for the version replicated bots."""

    ASCENDING = "Ascending"
    DESCENDING = "Descending"

    __str__ = str.__str__


Order8OrStr: TypeAlias = Annotated[Order8 | str, open_enum_validator(Order8)]
