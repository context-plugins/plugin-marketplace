from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ItemRazorpaySubscriptionsApi(SdkBaseModel):
    name: Optional[str] = UNSET
    amount: Optional[int] = UNSET
    """Addon amount in paise."""

    currency: str = "INR"


class ItemRazorpaySubscriptionsApiDict(TypedDict):
    name: NotRequired[str]
    amount: NotRequired[int]
    currency: NotRequired[str]
