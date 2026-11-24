from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortOrder4(str, Enum):
    """Used to specify the order to sort the list of returned report groups. Valid values are ASCENDING and
    DESCENDING."""

    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

    __str__ = str.__str__


SortOrder4OrStr: TypeAlias = Annotated[SortOrder4 | str, open_enum_validator(SortOrder4)]
