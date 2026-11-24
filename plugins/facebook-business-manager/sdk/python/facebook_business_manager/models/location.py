from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Location(SdkBaseModel):
    street: Optional[str] = UNSET
    city: Optional[str] = UNSET
    state: Optional[str] = UNSET
    country: Optional[str] = UNSET
    zip: Optional[str] = UNSET
    latitude: Optional[float] = UNSET
    longitude: Optional[float] = UNSET


class LocationDict(TypedDict):
    street: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    country: NotRequired[str]
    zip: NotRequired[str]
    latitude: NotRequired[float]
    longitude: NotRequired[float]
