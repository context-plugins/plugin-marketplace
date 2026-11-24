from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaAccessQuotaStatus4(SdkBaseModel):
    """Properties can use 50,000 tokens per hour. An API request consumes a single number of tokens, and that number is
    deducted from all of the hourly, daily, and per project hourly quotas."""

    consumed: Optional[int] = UNSET
    """Quota consumed by this request."""

    remaining: Optional[int] = UNSET
    """Quota remaining after this request."""


class GoogleAnalyticsAdminV1BetaAccessQuotaStatus4Dict(TypedDict):
    consumed: NotRequired[int]
    remaining: NotRequired[int]
