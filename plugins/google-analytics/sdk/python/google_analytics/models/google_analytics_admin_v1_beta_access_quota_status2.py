from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaAccessQuotaStatus2(SdkBaseModel):
    """Properties can use up to 50 concurrent requests."""

    consumed: Optional[int] = UNSET
    """Quota consumed by this request."""

    remaining: Optional[int] = UNSET
    """Quota remaining after this request."""


class GoogleAnalyticsAdminV1BetaAccessQuotaStatus2Dict(TypedDict):
    consumed: NotRequired[int]
    remaining: NotRequired[int]
