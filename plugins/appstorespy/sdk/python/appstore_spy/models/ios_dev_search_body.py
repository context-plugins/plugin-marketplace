from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.dev_sort_enum import DevSortEnumOrStr
from .search_filter_dev_ios import SearchFilterDevIos, SearchFilterDevIosDict


class IosDevSearchBody(SdkBaseModel):
    limit: int = 10
    """Count of developers in results"""

    page: int = 1
    """Offset page"""

    sort: Optional[DevSortEnumOrStr] = UNSET
    """Field for sort, prefix with - for descending"""

    fields: Optional[list[str]] = UNSET
    """Fields for select, empty for all"""

    filter: SearchFilterDevIos


class IosDevSearchBodyDict(TypedDict):
    limit: NotRequired[int]
    page: NotRequired[int]
    sort: NotRequired[DevSortEnumOrStr]
    fields: NotRequired[list[str]]
    filter: SearchFilterDevIosDict
