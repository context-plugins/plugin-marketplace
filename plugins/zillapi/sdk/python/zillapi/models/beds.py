from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Beds(SdkBaseModel):
    """Bedroom count range."""

    min: Optional[int] = UNSET
    max: Optional[int] = UNSET


class BedsDict(TypedDict):
    min: NotRequired[int]
    max: NotRequired[int]
