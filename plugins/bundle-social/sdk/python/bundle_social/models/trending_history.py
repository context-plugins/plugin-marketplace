from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class TrendingHistory(SdkBaseModel):
    date: str
    """Date in YYYY-MM-DD format."""

    rank_position_daily: OptionalNullable[str] = UNSET
    """Rank position on a specific date. Can be null if not ranked."""


class TrendingHistoryDict(TypedDict):
    date: str
    rank_position_daily: NotRequired[str | None]
