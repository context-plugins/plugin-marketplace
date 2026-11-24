from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Price(SdkBaseModel):
    """Price range in dollars."""

    min: Optional[int] = UNSET
    max: Optional[int] = UNSET


class PriceDict(TypedDict):
    min: NotRequired[int]
    max: NotRequired[int]
