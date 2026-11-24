from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.dev_sort_enum import DevSortEnumOrStr
from .search_filter_dev_play import SearchFilterDevPlay, SearchFilterDevPlayDict


class PlayDevSearchBody(SdkBaseModel):
    limit: int = 10
    """Count of developers in results"""

    page: int = 1
    """Offset page"""

    sort: Optional[DevSortEnumOrStr] = UNSET
    """Field for sort, prefix with - for descending"""

    fields: Optional[list[str]] = UNSET
    """Fields for select, empty for all"""

    filter: SearchFilterDevPlay


class PlayDevSearchBodyDict(TypedDict):
    limit: NotRequired[int]
    page: NotRequired[int]
    sort: NotRequired[DevSortEnumOrStr]
    fields: NotRequired[list[str]]
    filter: SearchFilterDevPlayDict
