from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .order_item_response import OrderItemResponse, OrderItemResponseDict


class CaptureResponse(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Unique capture ID, assigned by Tabby."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """Date and time the capture was created, in UTC, and displayed in ISO 8601 datetime format, assigned by Tabby."""

    amount: str
    """Total payment amount captured, including tax, shipping, and excluding any discounts. Allows to send up to 2
    decimals for AED and SAR, up to 3 decimals for KWD."""

    tax_amount: str = "0"
    """Tax amount captured."""

    shipping_amount: str = "0"
    """Shipping cost captured."""

    discount_amount: str = "0"
    """Total discount for the order. Should be positive or zero."""

    items: OptionalNullable[list[OrderItemResponse]] = UNSET
    """Array of objects representing the order items being captured."""

    reference_id: str | None
    """Idempotency key. Used to avoid similar capture requests."""


class CaptureResponseDict(TypedDict):
    id: NotRequired[UUID]
    created_at: NotRequired[RFC3339DateTime]
    amount: str
    tax_amount: NotRequired[str]
    shipping_amount: NotRequired[str]
    discount_amount: NotRequired[str]
    items: NotRequired[list[OrderItemResponseDict] | None]
    reference_id: str | None
