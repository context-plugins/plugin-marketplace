from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LatLng2(SdkBaseModel):
    """Required. The latitude and longitude of the location to calculate the commute time from."""

    latitude: Optional[float] = UNSET
    """The latitude in degrees. It must be in the range [-90.0, +90.0]."""

    longitude: Optional[float] = UNSET
    """The longitude in degrees. It must be in the range [-180.0, +180.0]."""


class LatLng2Dict(TypedDict):
    latitude: NotRequired[float]
    longitude: NotRequired[float]
