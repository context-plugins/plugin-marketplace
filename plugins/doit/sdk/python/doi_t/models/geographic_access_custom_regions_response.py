from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .geographic_access_custom_region import GeographicAccessCustomRegion, GeographicAccessCustomRegionDict


class GeographicAccessCustomRegionsResponse(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    custom_regions: list[GeographicAccessCustomRegion] = Field(alias="customRegions")
    """Ready custom regions owned by the authenticated tenant."""


class GeographicAccessCustomRegionsResponseDict(TypedDict):
    custom_regions: list[GeographicAccessCustomRegionDict]
