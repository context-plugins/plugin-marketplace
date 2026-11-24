from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.change_scheduled_at import ChangeScheduledAtOrStr
from .enums.customer_notify import CustomerNotifyOrInt
from .enums.entity_razorpay_subscriptions_api import EntityRazorpaySubscriptionsApiOrStr
from .enums.status_razorpay_subscriptions_api import StatusRazorpaySubscriptionsApiOrStr


class Subscription(SdkBaseModel):
    """A recurring billing subscription linking a customer to a plan. Requires customer mandate authorization via
    short_url before charges can be collected."""

    id: Optional[str] = UNSET
    """Subscription ID. Prefix: sub_"""

    entity: Optional[EntityRazorpaySubscriptionsApiOrStr] = UNSET
    plan_id: Optional[str] = UNSET
    """Associated plan ID (plan_*)."""

    status: Optional[StatusRazorpaySubscriptionsApiOrStr] = UNSET
    """Subscription lifecycle status. created→authenticated (mandate authorized)→active→completed/cancelled/expired.
    pending=charge retry scheduled; halted=multiple failures; paused=temporarily stopped."""

    current_start: Optional[int] = UNSET
    """Unix timestamp of current billing cycle start."""

    current_end: Optional[int] = UNSET
    """Unix timestamp of current billing cycle end."""

    ended_at: Optional[int] = UNSET
    """Unix timestamp when subscription ended (cancelled/completed/expired)."""

    quantity: int = 1
    """Number of plan units billed per cycle."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    charge_at: Optional[int] = UNSET
    """Unix timestamp of next scheduled charge attempt."""

    start_at: Optional[int] = UNSET
    """Unix timestamp of first charge. Defaults to subscription creation time."""

    end_at: Optional[int] = UNSET
    """Unix timestamp after which no more charges will be attempted."""

    auth_attempts: Optional[int] = UNSET
    """Number of mandate authorization attempts."""

    total_count: Optional[int] = UNSET
    """Total billing cycles. 0 = indefinite."""

    paid_count: Optional[int] = UNSET
    """Number of billing cycles successfully charged."""

    remaining_count: Optional[int] = UNSET
    """Remaining billing cycles."""

    customer_notify: Optional[CustomerNotifyOrInt] = UNSET
    """1 = Razorpay sends SMS/email notifications to customer on each charge."""

    short_url: Optional[str] = UNSET
    """Mandate authorization URL. Must be sent to the customer to activate the subscription."""

    has_scheduled_changes: Optional[bool] = UNSET
    """True if a plan/quantity change is scheduled for the next cycle."""

    change_scheduled_at: Optional[ChangeScheduledAtOrStr] = UNSET
    """When scheduled changes take effect."""

    source: Optional[str] = UNSET
    """Source that created the subscription (e.g., api, dashboard)."""

    offer_id: Optional[str] = UNSET
    """Offer/coupon applied to the subscription."""

    expire_by: Optional[int] = UNSET
    """Unix timestamp by which the customer must authorize the mandate."""

    created_at: Optional[int] = UNSET


class SubscriptionDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpaySubscriptionsApiOrStr]
    plan_id: NotRequired[str]
    status: NotRequired[StatusRazorpaySubscriptionsApiOrStr]
    current_start: NotRequired[int]
    current_end: NotRequired[int]
    ended_at: NotRequired[int]
    quantity: NotRequired[int]
    notes: NotRequired[dict[str, str]]
    charge_at: NotRequired[int]
    start_at: NotRequired[int]
    end_at: NotRequired[int]
    auth_attempts: NotRequired[int]
    total_count: NotRequired[int]
    paid_count: NotRequired[int]
    remaining_count: NotRequired[int]
    customer_notify: NotRequired[CustomerNotifyOrInt]
    short_url: NotRequired[str]
    has_scheduled_changes: NotRequired[bool]
    change_scheduled_at: NotRequired[ChangeScheduledAtOrStr]
    source: NotRequired[str]
    offer_id: NotRequired[str]
    expire_by: NotRequired[int]
    created_at: NotRequired[int]
