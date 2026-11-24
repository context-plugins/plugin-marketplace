from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .geometry import Geometry, GeometryDict


class Location(SdkBaseModel):
    route_no: Optional[str] = Field(default=UNSET, alias="routeNo")
    route: Optional[str] = UNSET
    postal_code: Optional[str] = Field(default=UNSET, alias="postalCode")
    suburb: Optional[str] = UNSET
    state: Optional[str] = UNSET
    country: Optional[str] = UNSET
    formatted_address: Optional[str] = Field(default=UNSET, alias="formattedAddress")
    geometry: Optional[Geometry] = UNSET


class LocationDict(TypedDict):
    route_no: NotRequired[str]
    route: NotRequired[str]
    postal_code: NotRequired[str]
    suburb: NotRequired[str]
    state: NotRequired[str]
    country: NotRequired[str]
    formatted_address: NotRequired[str]
    geometry: NotRequired[GeometryDict]
