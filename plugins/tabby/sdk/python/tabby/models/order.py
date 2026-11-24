from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .order_item import OrderItem, OrderItemDict


class Order(SdkBaseModel):
    reference_id: str
    """Merchant-assigned order number."""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """Date and time the order was last updated, in UTC, and displayed in ISO 8601 datetime format."""

    tax_amount: str = "0.00"
    """Total tax for the order."""

    shipping_amount: str = "0.00"
    """Total shipping cost for the order."""

    discount_amount: str = "0.00"
    """Total discount for the order. Should be positive or zero. Shows up on Tabby App for the Customer's
    convenience."""

    items: list[OrderItem]
    """Array of objects representing the order items in this payment."""


class OrderDict(TypedDict):
    reference_id: str
    updated_at: NotRequired[RFC3339DateTime]
    tax_amount: NotRequired[str]
    shipping_amount: NotRequired[str]
    discount_amount: NotRequired[str]
    items: list[OrderItemDict]
