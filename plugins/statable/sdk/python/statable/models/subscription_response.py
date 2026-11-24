from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status import StatusOrStr


class SubscriptionResponse(SdkBaseModel):
    status: StatusOrStr
    is_trial: bool
    ends_at: Optional[RFC3339DateTime] = UNSET
    """When the current state stops being true — the trial's end while trialing, the paid period's end otherwise. Absent
    when unknown."""

    only_hobby: bool
    """True when the account has hobby sites and nothing else."""


class SubscriptionResponseDict(TypedDict):
    status: StatusOrStr
    is_trial: bool
    ends_at: NotRequired[RFC3339DateTime]
    only_hobby: bool
