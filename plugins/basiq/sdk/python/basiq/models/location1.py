from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .geometry1 import Geometry1, Geometry1Dict


class Location1(SdkBaseModel):
    route_no: Optional[str] = Field(default=UNSET, alias="routeNo")
    """The street number of the merchant location."""

    route: Optional[str] = UNSET
    """The street name of the merchant location."""

    postal_code: Optional[str] = Field(default=UNSET, alias="postalCode")
    """The post code of the merchant location."""

    suburb: Optional[str] = UNSET
    """The suburb of the merchant location."""

    state: Optional[str] = UNSET
    """The state of the merchant location."""

    country: Optional[str] = UNSET
    """The country of the merchant location."""

    formatted_address: Optional[str] = Field(default=UNSET, alias="formattedAddress")
    """The full address for the merchant location"""

    geometry: Optional[Geometry1] = UNSET
    """Contains the lat and lng coordinates of the merchant location."""


class Location1Dict(TypedDict):
    route_no: NotRequired[str]
    route: NotRequired[str]
    postal_code: NotRequired[str]
    suburb: NotRequired[str]
    state: NotRequired[str]
    country: NotRequired[str]
    formatted_address: NotRequired[str]
    geometry: NotRequired[Geometry1Dict]
