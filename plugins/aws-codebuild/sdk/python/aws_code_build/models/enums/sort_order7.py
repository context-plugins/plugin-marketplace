from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortOrder7(str, Enum):
    """The order in which to list shared report groups. Valid values include: ASCENDING: List in ascending order.
    DESCENDING: List in descending order."""

    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

    __str__ = str.__str__


SortOrder7OrStr: TypeAlias = Annotated[SortOrder7 | str, open_enum_validator(SortOrder7)]
