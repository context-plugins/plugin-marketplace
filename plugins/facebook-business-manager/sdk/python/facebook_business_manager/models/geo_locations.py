from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GeoLocations(SdkBaseModel):
    countries: Optional[list[str]] = UNSET


class GeoLocationsDict(TypedDict):
    countries: NotRequired[list[str]]
