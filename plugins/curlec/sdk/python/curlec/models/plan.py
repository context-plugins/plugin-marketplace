from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity_razorpay_plans_api import EntityRazorpayPlansApiOrStr
from .enums.period import PeriodOrStr
from .item2 import Item2, Item2Dict


class Plan(SdkBaseModel):
    """A billing plan defining the recurring charge amount and frequency. Reusable across multiple subscriptions."""

    id: Optional[str] = UNSET
    """Plan ID. Prefix: plan_"""

    entity: Optional[EntityRazorpayPlansApiOrStr] = UNSET
    interval: Optional[int] = UNSET
    """Number of periods between charges. For daily period, minimum interval is 7."""

    period: Optional[PeriodOrStr] = UNSET
    """Billing frequency unit. daily requires interval ≥ 7."""

    item: Optional[Item2] = UNSET
    """The item (price, currency, name) billed each cycle."""

    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""

    created_at: Optional[int] = UNSET


class PlanDict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[EntityRazorpayPlansApiOrStr]
    interval: NotRequired[int]
    period: NotRequired[PeriodOrStr]
    item: NotRequired[Item2Dict]
    notes: NotRequired[dict[str, str]]
    created_at: NotRequired[int]
