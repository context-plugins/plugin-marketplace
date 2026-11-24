from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GeoItem(SdkBaseModel):
    """A geographic location item for audience targeting."""

    uid: Optional[str] = UNSET
    """Unique identifier of the geographic location."""

    name: Optional[str] = UNSET
    """Display name of the location."""

    code: Optional[str] = UNSET
    """ISO code for the location (country code, region code, etc.)."""


class GeoItemDict(TypedDict):
    uid: NotRequired[str]
    name: NotRequired[str]
    code: NotRequired[str]
