from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .search_code_search_result import SearchCodeSearchResult, SearchCodeSearchResultDict


class SearchResultPage(SdkBaseModel):
    size: Optional[int] = UNSET
    page: Optional[int] = UNSET
    pagelen: Optional[int] = UNSET
    query_substituted: Optional[bool] = UNSET
    next: Optional[str] = UNSET
    previous: Optional[str] = UNSET
    values: Optional[list[SearchCodeSearchResult]] = UNSET


class SearchResultPageDict(TypedDict):
    size: NotRequired[int]
    page: NotRequired[int]
    pagelen: NotRequired[int]
    query_substituted: NotRequired[bool]
    next: NotRequired[str]
    previous: NotRequired[str]
    values: NotRequired[list[SearchCodeSearchResultDict]]
