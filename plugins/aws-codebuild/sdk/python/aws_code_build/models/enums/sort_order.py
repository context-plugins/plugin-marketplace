from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortOrder(str, Enum):
    """The order to list build IDs. Valid values include: ASCENDING: List the build IDs in ascending order by build ID.
    DESCENDING: List the build IDs in descending order by build ID."""

    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

    __str__ = str.__str__


SortOrderOrStr: TypeAlias = Annotated[SortOrder | str, open_enum_validator(SortOrder)]
