from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .hdp_data import HdpData, HdpDataDict
from .lat_long import LatLong, LatLongDict


class SearchResultRow(SdkBaseModel):
    """A single row returned by search/listings endpoints. This is the SEARCH shape — lighter than the full Property
    detail record and with different field names. To get the full detail record for a row, call GET
    /v1/properties/{zpid} using its zpid."""

    zpid: Optional[str] = UNSET
    """Zillow property id, always a string."""

    id: OptionalNullable[str] = UNSET
    """Zillow result id for the row."""

    pals_id: OptionalNullable[str] = Field(default=UNSET, alias="palsId")
    address: OptionalNullable[str] = UNSET
    """Formatted street address for the row."""

    address_street: OptionalNullable[str] = Field(default=UNSET, alias="addressStreet")
    address_city: OptionalNullable[str] = Field(default=UNSET, alias="addressCity")
    address_state: OptionalNullable[str] = Field(default=UNSET, alias="addressState")
    address_zipcode: OptionalNullable[str] = Field(default=UNSET, alias="addressZipcode")
    price: OptionalNullable[str] = UNSET
    """Formatted price string, e.g. "$1,250,000"."""

    unformatted_price: OptionalNullable[float] = Field(default=UNSET, alias="unformattedPrice")
    """Numeric price."""

    beds: OptionalNullable[float] = UNSET
    baths: OptionalNullable[float] = UNSET
    area: OptionalNullable[float] = UNSET
    """Living area in square feet."""

    living_area: OptionalNullable[float] = Field(default=UNSET, alias="livingArea")
    lat_long: Optional[LatLong] = Field(default=UNSET, alias="latLong")
    status_type: OptionalNullable[str] = Field(default=UNSET, alias="statusType")
    """e.g. FOR_SALE, FOR_RENT, SOLD."""

    status_text: OptionalNullable[str] = Field(default=UNSET, alias="statusText")
    home_type: OptionalNullable[str] = Field(default=UNSET, alias="homeType")
    img_src: OptionalNullable[str] = Field(default=UNSET, alias="imgSrc")
    """Primary thumbnail image URL."""

    has_image: OptionalNullable[bool] = Field(default=UNSET, alias="hasImage")
    detail_url: OptionalNullable[str] = Field(default=UNSET, alias="detailUrl")
    """Relative or absolute Zillow detail URL for the listing."""

    hdp_data: Optional[HdpData] = Field(default=UNSET, alias="hdpData")


class SearchResultRowDict(TypedDict):
    zpid: NotRequired[str]
    id: NotRequired[str | None]
    pals_id: NotRequired[str | None]
    address: NotRequired[str | None]
    address_street: NotRequired[str | None]
    address_city: NotRequired[str | None]
    address_state: NotRequired[str | None]
    address_zipcode: NotRequired[str | None]
    price: NotRequired[str | None]
    unformatted_price: NotRequired[float | None]
    beds: NotRequired[float | None]
    baths: NotRequired[float | None]
    area: NotRequired[float | None]
    living_area: NotRequired[float | None]
    lat_long: NotRequired[LatLongDict]
    status_type: NotRequired[str | None]
    status_text: NotRequired[str | None]
    home_type: NotRequired[str | None]
    img_src: NotRequired[str | None]
    has_image: NotRequired[bool | None]
    detail_url: NotRequired[str | None]
    hdp_data: NotRequired[HdpDataDict]
