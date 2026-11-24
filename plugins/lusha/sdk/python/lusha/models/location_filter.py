from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LocationFilter(SdkBaseModel):
    continent: Optional[str] = UNSET
    country: Optional[str] = UNSET
    city: Optional[str] = UNSET
    state: Optional[str] = UNSET
    country_grouping: Optional[str] = UNSET


class LocationFilterDict(TypedDict):
    continent: NotRequired[str]
    country: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    country_grouping: NotRequired[str]
