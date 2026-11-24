from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Sqft(SdkBaseModel):
    """Living-area range in square feet."""

    min: Optional[int] = UNSET
    max: Optional[int] = UNSET


class SqftDict(TypedDict):
    min: NotRequired[int]
    max: NotRequired[int]
