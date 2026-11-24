from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Geometry(SdkBaseModel):
    lat: Optional[str] = UNSET
    lng: Optional[str] = UNSET


class GeometryDict(TypedDict):
    lat: NotRequired[str]
    lng: NotRequired[str]
