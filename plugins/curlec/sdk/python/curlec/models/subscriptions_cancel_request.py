from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.cancel_at_cycle_end import CancelAtCycleEndOrInt


class SubscriptionsCancelRequest(SdkBaseModel):
    cancel_at_cycle_end: Optional[CancelAtCycleEndOrInt] = UNSET
    """1 = cancel at end of current cycle; 0 = cancel immediately."""


class SubscriptionsCancelRequestDict(TypedDict):
    cancel_at_cycle_end: NotRequired[CancelAtCycleEndOrInt]
