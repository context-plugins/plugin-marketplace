from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class RevenueRange(SdkBaseModel):
    min: Optional[float] = UNSET
    max: Optional[float] = UNSET


class RevenueRangeDict(TypedDict):
    min: NotRequired[float]
    max: NotRequired[float]
