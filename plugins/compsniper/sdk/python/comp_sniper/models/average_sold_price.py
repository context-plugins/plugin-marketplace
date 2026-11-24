from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AverageSoldPrice(SdkBaseModel):
    amount: Optional[str] = UNSET
    currency: Optional[str] = UNSET
    display: Optional[str] = UNSET


class AverageSoldPriceDict(TypedDict):
    amount: NotRequired[str]
    currency: NotRequired[str]
    display: NotRequired[str]
