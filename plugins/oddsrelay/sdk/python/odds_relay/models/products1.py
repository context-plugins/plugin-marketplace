from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .enums.status2 import Status2OrStr


class Products1(SdkBaseModel):
    bookmaker: str
    """Venue key, bookmakers then exchanges."""

    sport: str
    """Sport key base."""

    status: Status2OrStr
    """``live``: we are publishing odds for this venue and sport right now. ``interrupted_24h``: we are not — no rows at
    this instant, or the venue's feed is interrupted now; it was publishing within the last 24 hours, which is why it is
    listed at all."""


class Products1Dict(TypedDict):
    bookmaker: str
    sport: str
    status: Status2OrStr
