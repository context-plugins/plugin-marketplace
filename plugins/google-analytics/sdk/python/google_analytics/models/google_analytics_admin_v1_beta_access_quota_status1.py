from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaAccessQuotaStatus1(SdkBaseModel):
    """Properties can use 250,000 tokens per day. Most requests consume fewer than 10 tokens."""

    consumed: Optional[int] = UNSET
    """Quota consumed by this request."""

    remaining: Optional[int] = UNSET
    """Quota remaining after this request."""


class GoogleAnalyticsAdminV1BetaAccessQuotaStatus1Dict(TypedDict):
    consumed: NotRequired[int]
    remaining: NotRequired[int]
