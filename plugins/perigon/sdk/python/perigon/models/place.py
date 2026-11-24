from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .coordinate import Coordinate, CoordinateDict


class Place(SdkBaseModel):
    """Structured geographic places extracted from the article."""

    osm_id: OptionalNullable[str] = Field(default=UNSET, alias="osmId")
    """OpenStreetMap identifier for the place."""

    road: OptionalNullable[str] = UNSET
    """Road associated with the place."""

    quarter: OptionalNullable[str] = UNSET
    """Quarter associated with the place."""

    suburb: OptionalNullable[str] = UNSET
    """Suburb associated with the place."""

    city: OptionalNullable[str] = UNSET
    """City associated with the place."""

    town: OptionalNullable[str] = UNSET
    """Town associated with the place."""

    county: OptionalNullable[str] = UNSET
    """County associated with the place."""

    state_district: OptionalNullable[str] = Field(default=UNSET, alias="stateDistrict")
    """State district associated with the place."""

    state: OptionalNullable[str] = UNSET
    """State or region associated with the place."""

    postcode: OptionalNullable[str] = UNSET
    """Postal code associated with the place."""

    country: OptionalNullable[str] = UNSET
    """Country associated with the place."""

    country_code: OptionalNullable[str] = Field(default=UNSET, alias="countryCode")
    """Two-character country code for the place."""

    amenity: OptionalNullable[str] = UNSET
    """Named amenity associated with the place."""

    neighbourhood: OptionalNullable[str] = UNSET
    """Neighborhood associated with the place."""

    coordinates: Optional[Coordinate] = UNSET


class PlaceDict(TypedDict):
    osm_id: NotRequired[str | None]
    road: NotRequired[str | None]
    quarter: NotRequired[str | None]
    suburb: NotRequired[str | None]
    city: NotRequired[str | None]
    town: NotRequired[str | None]
    county: NotRequired[str | None]
    state_district: NotRequired[str | None]
    state: NotRequired[str | None]
    postcode: NotRequired[str | None]
    country: NotRequired[str | None]
    country_code: NotRequired[str | None]
    amenity: NotRequired[str | None]
    neighbourhood: NotRequired[str | None]
    coordinates: NotRequired[CoordinateDict]
