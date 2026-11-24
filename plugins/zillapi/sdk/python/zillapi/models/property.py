from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .open_house import OpenHouse, OpenHouseDict
from .photo import Photo, PhotoDict
from .price_history_event import PriceHistoryEvent, PriceHistoryEventDict
from .school import School, SchoolDict
from .tax_history_event import TaxHistoryEvent, TaxHistoryEventDict


class Property(SdkBaseModel):
    """Full property-detail record (300+ fields; additional properties allowed). This is the DETAIL shape and differs
    from the SearchResultRow shape returned by search endpoints."""

    zpid: Optional[str] = UNSET
    """Zillow property id, always returned as a string."""

    address: Optional[Any] = UNSET
    price: Optional[float] = UNSET
    bedrooms: Optional[float] = UNSET
    bathrooms: Optional[float] = UNSET
    living_area: Optional[float] = Field(default=UNSET, alias="livingArea")
    lot_size: Optional[float] = Field(default=UNSET, alias="lotSize")
    year_built: Optional[int] = Field(default=UNSET, alias="yearBuilt")
    home_type: Optional[str] = Field(default=UNSET, alias="homeType")
    """SINGLE_FAMILY | CONDO | TOWNHOUSE | MULTI_FAMILY | APARTMENT | MANUFACTURED | LOT"""

    home_status: Optional[str] = Field(default=UNSET, alias="homeStatus")
    """FOR_SALE | RECENTLY_SOLD | FOR_RENT | ..."""

    latitude: Optional[float] = UNSET
    longitude: Optional[float] = UNSET
    zestimate: OptionalNullable[float] = UNSET
    rent_zestimate: OptionalNullable[float] = Field(default=UNSET, alias="rentZestimate")
    price_history: Optional[list[PriceHistoryEvent]] = Field(default=UNSET, alias="priceHistory")
    tax_history: Optional[list[TaxHistoryEvent]] = Field(default=UNSET, alias="taxHistory")
    schools: Optional[list[School]] = UNSET
    nearby_homes: Optional[list[Any]] = Field(default=UNSET, alias="nearbyHomes")
    responsive_photos: Optional[list[Photo]] = Field(default=UNSET, alias="responsivePhotos")
    photo_count: Optional[int] = Field(default=UNSET, alias="photoCount")
    open_house_schedule: Optional[list[OpenHouse]] = Field(default=UNSET, alias="openHouseSchedule")
    tour_eligibility: Optional[Any] = Field(default=UNSET, alias="tourEligibility")
    reso_facts: Optional[Any] = Field(default=UNSET, alias="resoFacts")


class PropertyDict(TypedDict):
    zpid: NotRequired[str]
    address: NotRequired[Any]
    price: NotRequired[float]
    bedrooms: NotRequired[float]
    bathrooms: NotRequired[float]
    living_area: NotRequired[float]
    lot_size: NotRequired[float]
    year_built: NotRequired[int]
    home_type: NotRequired[str]
    home_status: NotRequired[str]
    latitude: NotRequired[float]
    longitude: NotRequired[float]
    zestimate: NotRequired[float | None]
    rent_zestimate: NotRequired[float | None]
    price_history: NotRequired[list[PriceHistoryEventDict]]
    tax_history: NotRequired[list[TaxHistoryEventDict]]
    schools: NotRequired[list[SchoolDict]]
    nearby_homes: NotRequired[list[Any]]
    responsive_photos: NotRequired[list[PhotoDict]]
    photo_count: NotRequired[int]
    open_house_schedule: NotRequired[list[OpenHouseDict]]
    tour_eligibility: NotRequired[Any]
    reso_facts: NotRequired[Any]
