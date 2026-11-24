from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .geo_item import GeoItem, GeoItemDict


class GeoList(SdkBaseModel):
    """A list of geographic locations for audience targeting."""

    data: Optional[list[GeoItem]] = UNSET
    """Array of geographic location objects."""


class GeoListDict(TypedDict):
    data: NotRequired[list[GeoItemDict]]
