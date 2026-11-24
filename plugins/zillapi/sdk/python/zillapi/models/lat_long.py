from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LatLong(SdkBaseModel):
    latitude: Optional[float] = UNSET
    longitude: Optional[float] = UNSET


class LatLongDict(TypedDict):
    latitude: NotRequired[float]
    longitude: NotRequired[float]
