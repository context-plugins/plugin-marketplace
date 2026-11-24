from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.extraction_method import ExtractionMethod, ExtractionMethodOrStr
from .search_filters import SearchFilters, SearchFiltersDict
from .search_url import SearchUrl, SearchUrlDict


class SearchRequest(SdkBaseModel):
    filters: Optional[SearchFilters] = UNSET
    """Normalized search filters. A ``bbox`` is required (unless the request supplies ``searchUrls`` instead); a
    free-text search without a bounding box is rejected with 400 invalid_filters and never hits upstream."""

    search_urls: list[SearchUrl] = Field(alias="searchUrls")
    """Advanced: pre-built Zillow search URLs. Provide this instead of filters.bbox."""

    extraction_method: ExtractionMethodOrStr = Field(default=ExtractionMethod.PAGINATION, alias="extractionMethod")
    """PAGINATION (default, up to ~820 results); MAP_MARKERS (fastest, up to ~500, less data per row);
    PAGINATION_WITH_ZOOM_IN (exhaustive recursive zoom, always runs async)."""

    max_items: int = Field(default=50, alias="maxItems")
    """Maximum records to return (product hard cap 500). When maxItems > 50 the request is processed asynchronously and
    returns 202 with a job_id instead of results inline. maxItems ≤ 50 runs synchronously."""

    async_: Optional[bool] = Field(default=UNSET, alias="async")
    """Force async processing (202/job) even when maxItems ≤ 50."""


class SearchRequestDict(TypedDict):
    filters: NotRequired[SearchFiltersDict]
    search_urls: list[SearchUrlDict]
    extraction_method: NotRequired[ExtractionMethodOrStr]
    max_items: NotRequired[int]
    async_: NotRequired[bool]
