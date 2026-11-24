from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .search_meta import SearchMeta, SearchMetaDict
from .search_result import SearchResult, SearchResultDict


class SearchResponse(SdkBaseModel):
    """API v1 Search Response - clean, stable structure"""

    meta: SearchMeta
    results: list[SearchResult]


class SearchResponseDict(TypedDict):
    meta: SearchMetaDict
    results: list[SearchResultDict]
