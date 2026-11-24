from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SearchOrder(str, Enum):
    """How SearchResults are ordered. Valid values are Ascending or Descending. The default is Descending."""

    ASCENDING = "Ascending"
    DESCENDING = "Descending"

    __str__ = str.__str__


SearchOrderOrStr: TypeAlias = Annotated[SearchOrder | str, open_enum_validator(SearchOrder)]
