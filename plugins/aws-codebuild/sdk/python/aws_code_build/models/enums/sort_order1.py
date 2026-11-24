from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortOrder1(str, Enum):
    """Specifies the sort order of the returned items. Valid values include: ASCENDING: List the batch build identifiers
    in ascending order by identifier. DESCENDING: List the batch build identifiers in descending order by identifier."""

    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

    __str__ = str.__str__


SortOrder1OrStr: TypeAlias = Annotated[SortOrder1 | str, open_enum_validator(SortOrder1)]
