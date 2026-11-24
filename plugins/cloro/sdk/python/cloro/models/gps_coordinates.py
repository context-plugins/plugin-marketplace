from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GpsCoordinates(SdkBaseModel):
    """Geographic coordinates of the place"""

    latitude: Optional[float] = UNSET
    """Latitude coordinate"""

    longitude: Optional[float] = UNSET
    """Longitude coordinate"""


class GpsCoordinatesDict(TypedDict):
    latitude: NotRequired[float]
    longitude: NotRequired[float]
