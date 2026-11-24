from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .order_item import OrderItem, OrderItemDict


class CaptureRequest(SdkBaseModel):
    amount: str
    """Total payment amount captured, including tax, shipping, and excluding any discounts. Allows to send up to 2
    decimals for AED and SAR, up to 3 decimals for KWD."""

    reference_id: str = "string"
    """Idempotency key. Used to avoid similar capture requests."""

    tax_amount: str = "0.00"
    """Tax amount captured."""

    shipping_amount: str = "0.00"
    """Shipping cost captured."""

    discount_amount: str = "0.00"
    """Total discount for the order. Should be positive or zero."""

    items: Optional[list[OrderItem]] = UNSET
    """Array of objects representing the order items being captured."""


class CaptureRequestDict(TypedDict):
    amount: str
    reference_id: str
    tax_amount: NotRequired[str]
    shipping_amount: NotRequired[str]
    discount_amount: NotRequired[str]
    items: NotRequired[list[OrderItemDict]]
