from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .addon import Addon, AddonDict
from .enums.customer_notify1 import CustomerNotify1OrInt
from .notify_info import NotifyInfo, NotifyInfoDict


class SubscriptionsRequest(SdkBaseModel):
    plan_id: str
    """Plan ID (plan_*) to subscribe the customer to."""

    total_count: int
    """Total number of billing cycles. Use 0 for indefinite (no fixed end)."""

    quantity: int = 1
    """Number of plan units billed per cycle."""

    customer_notify: Optional[CustomerNotify1OrInt] = UNSET
    """1 to have Razorpay notify customer via SMS/email on each charge event."""

    start_at: Optional[int] = UNSET
    """Unix timestamp for the first charge. Defaults to subscription creation time."""

    expire_by: Optional[int] = UNSET
    """Unix timestamp deadline for the customer to authorize the mandate."""

    addons: Optional[list[Addon]] = UNSET
    """One-time charges added to the first billing cycle only."""

    offer_id: Optional[str] = UNSET
    """Offer/coupon ID to apply to the subscription."""

    notify_info: Optional[NotifyInfo] = UNSET
    """If provided, Razorpay sends the mandate auth link directly to the customer."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class SubscriptionsRequestDict(TypedDict):
    plan_id: str
    total_count: int
    quantity: NotRequired[int]
    customer_notify: NotRequired[CustomerNotify1OrInt]
    start_at: NotRequired[int]
    expire_by: NotRequired[int]
    addons: NotRequired[list[AddonDict]]
    offer_id: NotRequired[str]
    notify_info: NotRequired[NotifyInfoDict]
    notes: NotRequired[dict[str, str]]
