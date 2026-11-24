from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SearchMode(str, Enum):
    """Mode of a search. Defaults to SearchMode.JOB_SEARCH."""

    SEARCH_MODE_UNSPECIFIED = "SEARCH_MODE_UNSPECIFIED"
    JOB_SEARCH = "JOB_SEARCH"
    FEATURED_JOB_SEARCH = "FEATURED_JOB_SEARCH"

    __str__ = str.__str__


SearchModeOrStr: TypeAlias = Annotated[SearchMode | str, open_enum_validator(SearchMode)]
