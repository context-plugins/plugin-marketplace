from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaAccessQuotaStatus6(SdkBaseModel):
    """Properties can use up to 25% of their tokens per project per hour. This amounts to Analytics 360 Properties can
    use 12,500 tokens per project per hour. An API request consumes a single number of tokens, and that number is
    deducted from all of the hourly, daily, and per project hourly quotas."""

    consumed: Optional[int] = UNSET
    """Quota consumed by this request."""

    remaining: Optional[int] = UNSET
    """Quota remaining after this request."""


class GoogleAnalyticsAdminV1BetaAccessQuotaStatus6Dict(TypedDict):
    consumed: NotRequired[int]
    remaining: NotRequired[int]
