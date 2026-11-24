from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaAccessQuotaStatus3(SdkBaseModel):
    """Properties and cloud project pairs can have up to 50 server errors per hour."""

    consumed: Optional[int] = UNSET
    """Quota consumed by this request."""

    remaining: Optional[int] = UNSET
    """Quota remaining after this request."""


class GoogleAnalyticsAdminV1BetaAccessQuotaStatus3Dict(TypedDict):
    consumed: NotRequired[int]
    remaining: NotRequired[int]
