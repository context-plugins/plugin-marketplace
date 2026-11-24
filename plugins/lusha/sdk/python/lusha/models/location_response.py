from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LocationResponse(SdkBaseModel):
    country: str
    """The country where the person is located."""

    country_iso2: str = Field(alias="countryIso2")
    """The ISO 3166-1 alpha-2 country code of the person."""

    country_iso22: Optional[str] = Field(default=UNSET, alias="country_iso2")
    """The ISO 3166-1 alpha-2 country code of the person."""

    continent: str
    """The continent where the person is located."""

    raw_location: str = Field(alias="rawLocation")
    """The detailed address."""

    region: Optional[str] = UNSET
    """The region where the person is located."""

    city: Optional[str] = UNSET
    """The city where the person is located."""

    city_id: Optional[float] = Field(default=UNSET, alias="cityId")
    """The ID of the city where the person is located."""

    state: Optional[str] = UNSET
    """The state where the person is located."""

    state_code: Optional[str] = Field(default=UNSET, alias="stateCode")
    """The state code of the person."""

    state_code2: Optional[str] = Field(default=UNSET, alias="state_code")
    """The state code of the person."""

    street: Optional[str] = UNSET
    """The street where the person is located."""

    location_coordinates: Optional[list[float]] = Field(default=UNSET, alias="locationCoordinates")
    """The coordinates of the person."""

    is_eu_contact: Optional[bool] = Field(default=UNSET, alias="isEuContact")
    """Indicates whether the person is in the EU."""


class LocationResponseDict(TypedDict):
    country: str
    country_iso2: str
    country_iso22: NotRequired[str]
    continent: str
    raw_location: str
    region: NotRequired[str]
    city: NotRequired[str]
    city_id: NotRequired[float]
    state: NotRequired[str]
    state_code: NotRequired[str]
    state_code2: NotRequired[str]
    street: NotRequired[str]
    location_coordinates: NotRequired[list[float]]
    is_eu_contact: NotRequired[bool]
