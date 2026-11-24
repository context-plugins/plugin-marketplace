from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1AccountStatusResponse(SdkBaseModel):
    api_access: Optional[bool] = UNSET
    blocked_reason: Optional[Any] = UNSET
    """Null when api_access is true, else one of key_expired, credits_depleted, subscription_expired, trial_daily_limit,
    monthly_billing_limit, monthly_quota_exhausted."""

    credits: Optional[Any] = UNSET
    message: Optional[Any] = UNSET
    """Human-readable reason, or null."""

    retry_after: Optional[int] = UNSET
    """Seconds until the block may clear. Present only when blocked."""

    subscription: Optional[Any] = UNSET
    trial: Optional[Any] = UNSET
    usage: Optional[Any] = UNSET


class ApiV1AccountStatusResponseDict(TypedDict):
    api_access: NotRequired[bool]
    blocked_reason: NotRequired[Any]
    credits: NotRequired[Any]
    message: NotRequired[Any]
    retry_after: NotRequired[int]
    subscription: NotRequired[Any]
    trial: NotRequired[Any]
    usage: NotRequired[Any]
