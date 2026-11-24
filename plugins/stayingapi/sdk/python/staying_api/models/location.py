from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Location(SdkBaseModel):
    lat: float
    lng: float
    city: str
    region: str
    country: str
    address: str


class LocationDict(TypedDict):
    lat: float
    lng: float
    city: str
    region: str
    country: str
    address: str
