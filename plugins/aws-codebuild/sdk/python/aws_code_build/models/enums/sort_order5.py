from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortOrder5(str, Enum):
    """Use to specify whether the results are returned in ascending or descending order."""

    ASCENDING = "ASCENDING"
    DESCENDING = "DESCENDING"

    __str__ = str.__str__


SortOrder5OrStr: TypeAlias = Annotated[SortOrder5 | str, open_enum_validator(SortOrder5)]
