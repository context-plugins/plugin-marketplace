from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.period1 import Period1OrStr
from .item1 import Item1, Item1Dict


class PlansRequest(SdkBaseModel):
    period: Period1OrStr
    """Billing frequency unit. For daily, minimum interval is 7."""

    interval: int
    """Number of periods between charges (e.g. interval=3, period=monthly → charge every 3 months)."""

    item: Item1
    notes: Optional[dict[str, str]] = UNSET
    """Key-value pairs for storing custom metadata. Maximum 15 pairs. Each key and value must not exceed 256
    characters."""


class PlansRequestDict(TypedDict):
    period: Period1OrStr
    interval: int
    item: Item1Dict
    notes: NotRequired[dict[str, str]]
