from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.extract_building_units import ExtractBuildingUnits, ExtractBuildingUnitsOrStr
from .enums.property_status import PropertyStatus, PropertyStatusOrStr


class BatchPropertyRequest(SdkBaseModel):
    """Up to 500 entries total across urls and addresses. At least one of urls or addresses is required."""

    urls: Optional[list[str]] = UNSET
    """Zillow URLs to resolve."""

    addresses: Optional[list[str]] = UNSET
    """Full street addresses to resolve."""

    property_status: PropertyStatusOrStr = Field(default=PropertyStatus.FOR_SALE, alias="propertyStatus")
    extract_building_units: ExtractBuildingUnitsOrStr = Field(
        default=ExtractBuildingUnits.DISABLED, alias="extractBuildingUnits"
    )
    max_items: Optional[int] = Field(default=UNSET, alias="maxItems")
    """Upper bound on records returned by the job."""


class BatchPropertyRequestDict(TypedDict):
    urls: NotRequired[list[str]]
    addresses: NotRequired[list[str]]
    property_status: NotRequired[PropertyStatusOrStr]
    extract_building_units: NotRequired[ExtractBuildingUnitsOrStr]
    max_items: NotRequired[int]
