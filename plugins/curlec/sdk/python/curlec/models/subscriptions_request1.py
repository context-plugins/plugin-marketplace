from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.customer_notify2 import CustomerNotify2OrInt
from .enums.schedule_change_at import ScheduleChangeAtOrStr


class SubscriptionsRequest1(SdkBaseModel):
    plan_id: Optional[str] = UNSET
    """New plan ID to switch to."""

    quantity: Optional[int] = UNSET
    remaining_count: Optional[int] = UNSET
    """Override remaining billing cycles."""

    schedule_change_at: Optional[ScheduleChangeAtOrStr] = UNSET
    """When changes take effect. 'now' starts a new cycle immediately; 'cycle_end' defers to end of current cycle."""

    customer_notify: Optional[CustomerNotify2OrInt] = UNSET
    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class SubscriptionsRequest1Dict(TypedDict):
    plan_id: NotRequired[str]
    quantity: NotRequired[int]
    remaining_count: NotRequired[int]
    schedule_change_at: NotRequired[ScheduleChangeAtOrStr]
    customer_notify: NotRequired[CustomerNotify2OrInt]
    notes: NotRequired[dict[str, str]]
