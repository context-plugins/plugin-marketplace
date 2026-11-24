from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .order_item import OrderItem, OrderItemDict


class RefundRequest(SdkBaseModel):
    amount: str = "0.00"
    """Amount refunded. Allows to send up to 2 decimals for AED and SAR, up to 3 decimals for KWD."""

    reference_id: str
    """Idempotency key. Used to avoid similar refund requests."""

    reason: Optional[str] = UNSET
    """Reason for the refund."""

    items: Optional[list[OrderItem]] = UNSET
    """Array of objects representing the order items being refunded."""


class RefundRequestDict(TypedDict):
    amount: str
    reference_id: str
    reason: NotRequired[str]
    items: NotRequired[list[OrderItemDict]]
