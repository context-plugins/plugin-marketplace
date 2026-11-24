from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ApiV1ReportingApiQuotaUsageResponse(SdkBaseModel):
    accepts: Optional[int] = UNSET
    ignores: Optional[int] = UNSET
    last_updated: Optional[float] = UNSET
    """Unix epoch seconds. Falls back to 24h ago when no aggregation timestamp is cached."""

    quota: Optional[int] = UNSET
    usage: Optional[int] = UNSET


class ApiV1ReportingApiQuotaUsageResponseDict(TypedDict):
    accepts: NotRequired[int]
    ignores: NotRequired[int]
    last_updated: NotRequired[float]
    quota: NotRequired[int]
    usage: NotRequired[int]
