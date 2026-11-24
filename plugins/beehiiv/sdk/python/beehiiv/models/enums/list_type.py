from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ListType(str, Enum):
    """The type of list (e.g., ordered, unordered)."""

    ORDERED = "ordered"
    UNORDERED = "unordered"

    __str__ = str.__str__


ListTypeOrStr: TypeAlias = Annotated[ListType | str, open_enum_validator(ListType)]
