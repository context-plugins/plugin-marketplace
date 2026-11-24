from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity_razorpay_orders_api import EntityRazorpayOrdersApiOrStr
from .enums.status_razorpay_orders_api import StatusRazorpayOrdersApiOrStr


class Order(SdkBaseModel):
    id: Optional[str] = UNSET
    """Unique order identifier. Prefix: order_"""

    entity: Optional[EntityRazorpayOrdersApiOrStr] = UNSET
    amount: Optional[int] = UNSET
    """Order amount in paise. Example: 50000 = ₹500."""

    amount_paid: Optional[int] = UNSET
    """Total amount paid against this order (paise)."""

    amount_due: Optional[int] = UNSET
    """Remaining unpaid amount (paise)."""

    currency: Optional[str] = UNSET
    """ISO 4217 currency code. Example: INR."""

    receipt: Optional[str] = UNSET
    """Your internal receipt or order reference number."""

    status: Optional[StatusRazorpayOrdersApiOrStr] = UNSET
    """created: awaiting payment. attempted: payment attempted but not captured. paid: fully paid."""

    attempts: Optional[int] = UNSET
    """Number of payment attempts made."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    created_at: Optional[int] = UNSET
    """Unix timestamp of order creation."""

    offer_id: Optional[str] = UNSET
    offers: Optional[list[str]] = UNSET


class OrderDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayOrdersApiOrStr]
    amount: NotRequired[int]
    amount_paid: NotRequired[int]
    amount_due: NotRequired[int]
    currency: NotRequired[str]
    receipt: NotRequired[str]
    status: NotRequired[StatusRazorpayOrdersApiOrStr]
    attempts: NotRequired[int]
    notes: NotRequired[dict[str, str]]
    created_at: NotRequired[int]
    offer_id: NotRequired[str]
    offers: NotRequired[list[str]]
