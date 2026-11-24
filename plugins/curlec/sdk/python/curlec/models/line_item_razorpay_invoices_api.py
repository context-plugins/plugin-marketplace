from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class LineItemRazorpayInvoicesApi(SdkBaseModel):
    item_id: Optional[str] = UNSET
    """Reference a catalog item. Populates name, amount, currency automatically."""

    name: Optional[str] = UNSET
    description: Optional[str] = UNSET
    amount: Optional[int] = UNSET
    """Price in paise."""

    quantity: int = 1
    currency: str = "INR"


class LineItemRazorpayInvoicesApiDict(TypedDict):
    item_id: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    amount: NotRequired[int]
    quantity: NotRequired[int]
    currency: NotRequired[str]
