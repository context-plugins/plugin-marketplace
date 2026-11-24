from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaAccessQuotaStatus(SdkBaseModel):
    """Current state for a particular quota group."""

    consumed: Optional[int] = UNSET
    """Quota consumed by this request."""

    remaining: Optional[int] = UNSET
    """Quota remaining after this request."""


class GoogleAnalyticsAdminV1BetaAccessQuotaStatusDict(TypedDict):
    consumed: NotRequired[int]
    remaining: NotRequired[int]
