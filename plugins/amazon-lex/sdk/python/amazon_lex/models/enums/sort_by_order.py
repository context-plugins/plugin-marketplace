from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByOrder(str, Enum):
    """The order so sort the list."""

    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

    __str__ = str.__str__


SortByOrderOrStr: TypeAlias = Annotated[SortByOrder | str, open_enum_validator(SortByOrder)]
