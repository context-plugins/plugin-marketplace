from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .search_filters import SearchFilters, SearchFiltersDict
from .sort_options import SortOptions, SortOptionsDict


class SearchRequest(SdkBaseModel):
    """API v1 Search Request - simplified for external API users"""

    filters: OptionalNullable[SearchFilters] = UNSET
    limit: int = 20
    """Results to return, 1–100; outside that range is a 400. Page with ``offset``."""

    offset: int = 0
    """Result offset for pagination."""

    query: str
    """Natural-language or keyword query."""

    search_type: OptionalNullable[str] = UNSET
    """One of ``"text"``, ``"semantic"``, or ``"hybrid"``. Defaults to auto-detect: queries with boolean operators /
    quoted phrases use ``"text"``, others ``"hybrid"``."""

    sort: OptionalNullable[SortOptions] = UNSET


class SearchRequestDict(TypedDict):
    filters: NotRequired[SearchFiltersDict | None]
    limit: NotRequired[int]
    offset: NotRequired[int]
    query: str
    search_type: NotRequired[str | None]
    sort: NotRequired[SortOptionsDict | None]
