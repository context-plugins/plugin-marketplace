from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LatLng(SdkBaseModel):
    """An object that represents a latitude/longitude pair. This is expressed as a pair of doubles to represent degrees
    latitude and degrees longitude. Unless specified otherwise, this object must conform to the WGS84 standard. Values
    must be within normalized ranges."""

    latitude: Optional[float] = UNSET
    """The latitude in degrees. It must be in the range [-90.0, +90.0]."""

    longitude: Optional[float] = UNSET
    """The longitude in degrees. It must be in the range [-180.0, +180.0]."""


class LatLngDict(TypedDict):
    latitude: NotRequired[float]
    longitude: NotRequired[float]
