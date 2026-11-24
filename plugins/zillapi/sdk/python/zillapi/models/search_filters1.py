from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .baths import Baths, BathsDict
from .bbox import Bbox, BboxDict
from .beds import Beds, BedsDict
from .enums.days_on_zillow import DaysOnZillowOrStr
from .enums.home_type import HomeTypeOrStr
from .enums.status_zillapi_zillow_property_data_listings_api import StatusZillapiZillowPropertyDataListingsApiOrStr
from .lot_size import LotSize, LotSizeDict
from .price import Price, PriceDict
from .sqft import Sqft, SqftDict
from .year_built import YearBuilt, YearBuiltDict


class SearchFilters1(SdkBaseModel):
    """Normalized search filters. A ``bbox`` is required (unless the request supplies ``searchUrls`` instead); a
    free-text search without a bounding box is rejected with 400 invalid_filters and never hits upstream."""

    status: Optional[StatusZillapiZillowPropertyDataListingsApiOrStr] = UNSET
    """Listing status."""

    bbox: Bbox
    """Bounding box in decimal degrees. REQUIRED unless searchUrls is supplied at the request level — the search engine
    needs a real bounding box to render results."""

    price: Optional[Price] = UNSET
    """Price range in dollars."""

    beds: Optional[Beds] = UNSET
    """Bedroom count range."""

    baths: Optional[Baths] = UNSET
    """Bathroom count range."""

    sqft: Optional[Sqft] = UNSET
    """Living-area range in square feet."""

    lot_size: Optional[LotSize] = Field(default=UNSET, alias="lotSize")
    year_built: Optional[YearBuilt] = Field(default=UNSET, alias="yearBuilt")
    days_on_zillow: Optional[DaysOnZillowOrStr] = Field(default=UNSET, alias="daysOnZillow")
    home_types: Optional[list[HomeTypeOrStr]] = Field(default=UNSET, alias="homeTypes")
    """Home types to include."""

    has_pool: Optional[bool] = Field(default=UNSET, alias="hasPool")
    has_garage: Optional[bool] = Field(default=UNSET, alias="hasGarage")
    has_air_conditioning: Optional[bool] = Field(default=UNSET, alias="hasAirConditioning")
    has_basement: Optional[bool] = Field(default=UNSET, alias="hasBasement")
    is_waterfront: Optional[bool] = Field(default=UNSET, alias="isWaterfront")
    location: Optional[str] = UNSET
    """Optional free-text place label (city/ZIP/neighborhood) — a hint only. A ``bbox`` (or request-level
    ``searchUrls``) is REQUIRED; ``location`` alone returns 400 (invalid_filters)."""


class SearchFilters1Dict(TypedDict):
    status: NotRequired[StatusZillapiZillowPropertyDataListingsApiOrStr]
    bbox: BboxDict
    price: NotRequired[PriceDict]
    beds: NotRequired[BedsDict]
    baths: NotRequired[BathsDict]
    sqft: NotRequired[SqftDict]
    lot_size: NotRequired[LotSizeDict]
    year_built: NotRequired[YearBuiltDict]
    days_on_zillow: NotRequired[DaysOnZillowOrStr]
    home_types: NotRequired[list[HomeTypeOrStr]]
    has_pool: NotRequired[bool]
    has_garage: NotRequired[bool]
    has_air_conditioning: NotRequired[bool]
    has_basement: NotRequired[bool]
    is_waterfront: NotRequired[bool]
    location: NotRequired[str]
