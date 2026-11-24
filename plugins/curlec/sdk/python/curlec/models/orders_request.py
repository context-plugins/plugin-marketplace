from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OrdersRequest(SdkBaseModel):
    amount: int
    """Payment amount in paise. Example: 50000 for ₹500. Must be >= 100."""

    currency: str = "INR"
    """ISO 4217 currency code. Example: INR."""

    receipt: Optional[str] = UNSET
    """Your internal receipt number. Max 40 characters."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    partial_payment: bool = False
    """Allow partial payments."""


class OrdersRequestDict(TypedDict):
    amount: int
    currency: str
    receipt: NotRequired[str]
    notes: NotRequired[dict[str, str]]
    partial_payment: NotRequired[bool]
