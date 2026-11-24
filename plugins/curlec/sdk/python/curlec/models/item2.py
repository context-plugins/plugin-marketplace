from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.entity1_razorpay_plans_api import Entity1RazorpayPlansApiOrStr


class Item2(SdkBaseModel):
    """The item (price, currency, name) billed each cycle."""

    id: Optional[str] = UNSET
    """Item ID. Prefix: item_"""

    entity: Optional[Entity1RazorpayPlansApiOrStr] = UNSET
    active: Optional[bool] = UNSET
    """Whether the item is active and available for use in new invoices."""

    amount: Optional[int] = UNSET
    """Item price in paise (smallest INR unit)."""

    unit_amount: Optional[int] = UNSET
    """Per-unit price in paise."""

    currency: str = "INR"
    name: Optional[str] = UNSET
    """Display name of the item."""

    description: Optional[str] = UNSET
    created_at: Optional[int] = UNSET


class Item2Dict(TypedDict):
    id: NotRequired[str]
    entity: NotRequired[Entity1RazorpayPlansApiOrStr]
    active: NotRequired[bool]
    amount: NotRequired[int]
    unit_amount: NotRequired[int]
    currency: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    created_at: NotRequired[int]
