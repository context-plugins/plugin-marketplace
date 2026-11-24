from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortOrder3(str, Enum):
    """The order to sort the results in. The results are sorted by build number, not the build identifier. If this is
    not specified, the results are sorted in descending order. Valid values include: ASCENDING: List the build
    identifiers in ascending order, by build number. DESCENDING: List the build identifiers in descending order, by
    build number. If the project has more than 100 builds, setting the sort order will result in an error."""

    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

    __str__ = str.__str__


SortOrder3OrStr: TypeAlias = Annotated[SortOrder3 | str, open_enum_validator(SortOrder3)]
