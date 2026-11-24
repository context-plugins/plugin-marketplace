from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class CacheUsage(SdkBaseModel):
    """Cache revalidation usage metrics for the organization."""

    used: Optional[int] = UNSET
    """Number of cache revalidation requests used in the current period."""

    limit: Optional[int] = UNSET
    """Maximum number of cache revalidation requests allowed per period."""

    period_start: Optional[RFC3339DateTime] = UNSET
    """Start of the current usage period."""

    period_end: Optional[RFC3339DateTime] = UNSET
    """End of the current usage period."""


class CacheUsageDict(TypedDict):
    used: NotRequired[int]
    limit: NotRequired[int]
    period_start: NotRequired[RFC3339DateTime]
    period_end: NotRequired[RFC3339DateTime]
