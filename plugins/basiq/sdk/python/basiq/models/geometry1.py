from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Geometry1(SdkBaseModel):
    """Contains the lat and lng coordinates of the merchant location."""

    lat: Optional[str] = UNSET
    lng: Optional[str] = UNSET


class Geometry1Dict(TypedDict):
    lat: NotRequired[str]
    lng: NotRequired[str]
