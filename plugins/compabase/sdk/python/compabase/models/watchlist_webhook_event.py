from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .change import Change, ChangeDict
from .company_compabase_watchlist_api import CompanyCompabaseWatchlistApi, CompanyCompabaseWatchlistApiDict
from .enums.event import EventOrStr


class WatchlistWebhookEvent(SdkBaseModel):
    """Payload POSTed to your webhook URL when a watched company changes."""

    event: EventOrStr
    """Event type (also sent in the ``X-Compabase-Event`` header)."""

    company: CompanyCompabaseWatchlistApi
    detected_at: RFC3339DateTime
    changes: Optional[list[Change]] = UNSET
    """Field-level changes, when the event has them."""

    registry: Optional[str] = UNSET
    """Source register for registry events (e.g. KRZ, MSiG, BZP)."""

    delta: Optional[float] = UNSET
    """Change of the register counter for registry events."""

    filing: Optional[Any] = UNSET
    """Newly filed financial statement (financials_updated)."""

    news: Optional[list[Any]] = UNSET
    """Newest articles (company_news)."""


class WatchlistWebhookEventDict(TypedDict):
    event: EventOrStr
    company: CompanyCompabaseWatchlistApiDict
    detected_at: RFC3339DateTime
    changes: NotRequired[list[ChangeDict]]
    registry: NotRequired[str]
    delta: NotRequired[float]
    filing: NotRequired[Any]
    news: NotRequired[list[Any]]
