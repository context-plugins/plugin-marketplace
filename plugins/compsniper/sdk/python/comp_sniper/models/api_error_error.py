from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ApiErrorError(SdkBaseModel):
    error: Optional[str] = UNSET
    code: Optional[str] = UNSET
    retry_after: Optional[int] = UNSET
    """Seconds before a temporary rate_limited request may be retried."""

    reset_at: Optional[RFC3339DateTime] = UNSET
    """Billing-cycle reset for quota_exceeded."""

    plan: Optional[str] = UNSET
    quota: Optional[int] = UNSET
    used: Optional[int] = UNSET
    remaining: Optional[int] = UNSET
    rollover_balance: Optional[int] = UNSET
    """Temporary carried-over requests remaining."""

    upgrade_url: Optional[str] = UNSET
    """Plan-management URL for quota_exceeded."""

    credit_balance: Optional[int] = UNSET
    """Non-expiring purchased credits remaining."""

    purchase_credits_url: Optional[str] = UNSET
    """Credit purchase URL for quota_exceeded."""

    subscription_url: Optional[str] = UNSET
    """Shipping Rates plan URL for shipping_subscription_required or shipping_quota_exceeded."""


class ApiErrorErrorDict(TypedDict):
    error: NotRequired[str]
    code: NotRequired[str]
    retry_after: NotRequired[int]
    reset_at: NotRequired[RFC3339DateTime]
    plan: NotRequired[str]
    quota: NotRequired[int]
    used: NotRequired[int]
    remaining: NotRequired[int]
    rollover_balance: NotRequired[int]
    upgrade_url: NotRequired[str]
    credit_balance: NotRequired[int]
    purchase_credits_url: NotRequired[str]
    subscription_url: NotRequired[str]
