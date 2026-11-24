from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortOrder1(str, Enum):
    """Specifies the order of sorted results. Valid values are ASCENDING or DESCENDING."""

    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

    __str__ = str.__str__


SortOrder1OrStr: TypeAlias = Annotated[SortOrder1 | str, open_enum_validator(SortOrder1)]
