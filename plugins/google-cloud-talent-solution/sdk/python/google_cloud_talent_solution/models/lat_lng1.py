from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LatLng1(SdkBaseModel):
    """The latitude and longitude of the geographic center to search from. This field is ignored if ``address`` is
    provided."""

    latitude: Optional[float] = UNSET
    """The latitude in degrees. It must be in the range [-90.0, +90.0]."""

    longitude: Optional[float] = UNSET
    """The longitude in degrees. It must be in the range [-180.0, +180.0]."""


class LatLng1Dict(TypedDict):
    latitude: NotRequired[float]
    longitude: NotRequired[float]
