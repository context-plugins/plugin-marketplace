from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class WatchlistSummary(SdkBaseModel):
    id: str
    """Unique watchlist identifier"""

    name: str
    """User-defined watchlist name"""

    position: int
    """Display order (lower values appear first)"""

    company_count: int
    """Number of companies in the watchlist"""

    created_at: Optional[RFC3339DateTime] = UNSET
    """When the watchlist was created"""

    updated_at: Optional[RFC3339DateTime] = UNSET
    """When the watchlist was last modified"""


class WatchlistSummaryDict(TypedDict):
    id: str
    name: str
    position: int
    company_count: int
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
