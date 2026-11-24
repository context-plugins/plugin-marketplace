from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .order_item_response import OrderItemResponse, OrderItemResponseDict


class RefundResponse(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Unique refund ID, assigned by Tabby."""

    created_at: Optional[RFC3339DateTime] = UNSET
    """Date and time the refund was created, in UTC, and displayed in ISO 8601 datetime format, assigned by Tabby."""

    amount: str = "0.00"
    """Amount refunded. Allows to send up to 2 decimals for AED and SAR, up to 3 decimals for KWD."""

    reason: OptionalNullable[str] = UNSET
    """Reason for the refund."""

    items: OptionalNullable[list[OrderItemResponse]] = UNSET
    """Array of objects representing the order items being refunded."""

    reference_id: str | None
    """Idempotency key. Used to avoid similar refund requests."""


class RefundResponseDict(TypedDict):
    id: NotRequired[UUID]
    created_at: NotRequired[RFC3339DateTime]
    amount: str
    reason: NotRequired[str | None]
    items: NotRequired[list[OrderItemResponseDict] | None]
    reference_id: str | None
