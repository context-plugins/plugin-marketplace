from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Location(SdkBaseModel):
    country: Optional[str] = UNSET
    """Required person location. Multiple values are comma delimited. Omit entirely to receive all locations."""


class LocationDict(TypedDict):
    country: NotRequired[str]
