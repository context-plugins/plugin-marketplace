from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .by_month import ByMonth, ByMonthDict


class Stats(SdkBaseModel):
    """Review statistics for a period, by when reviews were written. A reply counts once it is published."""

    since: RFC3339DateTime
    """Start of the period (included)."""

    until: RFC3339DateTime
    """End of the period (not included)."""

    location_id: str | None
    """The location filter, if any."""

    platform: str | None
    """The platform filter, if any."""

    reviews: int
    """Reviews written in the period."""

    average_rating: float | None
    """Average of the 1–5 ratings, 2 decimals. ``null`` without rated reviews."""

    ratings: dict[str, int]
    """Reviews per star, ``1`` to ``5``."""

    replied: int
    """Reviews with a published reply."""

    reply_rate: float | None
    """``replied / reviews``, 0 to 1. ``null`` without reviews."""

    median_reply_hours: float | None
    """Median time from review to reply, in hours, 1 decimal."""

    unreplied_negative: int
    """Reviews of 1 or 2 stars without a published reply."""

    by_month: list[ByMonth]
    """One entry per calendar month (UTC) with reviews, oldest first."""


class StatsDict(TypedDict):
    since: RFC3339DateTime
    until: RFC3339DateTime
    location_id: str | None
    platform: str | None
    reviews: int
    average_rating: float | None
    ratings: dict[str, int]
    replied: int
    reply_rate: float | None
    median_reply_hours: float | None
    unreplied_negative: int
    by_month: list[ByMonthDict]
