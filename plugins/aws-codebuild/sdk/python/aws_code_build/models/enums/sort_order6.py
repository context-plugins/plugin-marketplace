from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortOrder6(str, Enum):
    """The order in which to list shared build projects. Valid values include: ASCENDING: List in ascending order.
    DESCENDING: List in descending order."""

    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

    __str__ = str.__str__


SortOrder6OrStr: TypeAlias = Annotated[SortOrder6 | str, open_enum_validator(SortOrder6)]
