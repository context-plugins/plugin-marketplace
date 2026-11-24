from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Coordinates(SdkBaseModel):
    """The geographic coordinates of the delivery or pickup address."""

    latitude: Optional[float] = UNSET
    """The latitude coordinate."""

    longitude: Optional[float] = UNSET
    """The longitude coordinate."""


class CoordinatesDict(TypedDict):
    latitude: NotRequired[float]
    longitude: NotRequired[float]
