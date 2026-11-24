from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.extract_building_units import ExtractBuildingUnits, ExtractBuildingUnitsOrStr
from .enums.extraction_method import ExtractionMethod, ExtractionMethodOrStr
from .enums.property_status import PropertyStatus, PropertyStatusOrStr
from .search_filters1 import SearchFilters1, SearchFilters1Dict
from .search_url import SearchUrl, SearchUrlDict


class SearchWithDetailsRequest(SdkBaseModel):
    filters: SearchFilters1
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

    property_status: PropertyStatusOrStr = Field(default=PropertyStatus.FOR_SALE, alias="propertyStatus")
    extract_building_units: ExtractBuildingUnitsOrStr = Field(
        default=ExtractBuildingUnits.DISABLED, alias="extractBuildingUnits"
    )


class SearchWithDetailsRequestDict(TypedDict):
    filters: SearchFilters1Dict
    search_urls: list[SearchUrlDict]
    extraction_method: NotRequired[ExtractionMethodOrStr]
    max_items: NotRequired[int]
    async_: NotRequired[bool]
    property_status: NotRequired[PropertyStatusOrStr]
    extract_building_units: NotRequired[ExtractBuildingUnitsOrStr]
