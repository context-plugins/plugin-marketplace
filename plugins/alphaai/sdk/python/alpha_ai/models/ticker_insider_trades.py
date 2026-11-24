from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, OptionalNullable, SdkBaseModel
from .insider_trade_event import InsiderTradeEvent, InsiderTradeEventDict
from .insider_trades_month_bucket import InsiderTradesMonthBucket, InsiderTradesMonthBucketDict
from .insider_trades_summary import InsiderTradesSummary, InsiderTradesSummaryDict
from .insider_trades_week_bucket import InsiderTradesWeekBucket, InsiderTradesWeekBucketDict


class TickerInsiderTrades(SdkBaseModel):
    ticker: str
    coverage_start: OptionalNullable[Date] = UNSET
    """Earliest recorded transaction date for this ticker; charts should not claim history from before it. ``null`` when
    nothing is recorded."""

    summary: OptionalNullable[InsiderTradesSummary] = UNSET
    """First page only; ``null`` on cursor pages."""

    series: OptionalNullable[list[InsiderTradesMonthBucket]] = UNSET
    """Calendar-month buckets, zero-filled up to the current month and capped to the trailing 12 months. First page
    only; ``null`` on cursor pages."""

    series_weekly: OptionalNullable[list[InsiderTradesWeekBucket]] = UNSET
    """ISO-week buckets keyed by their Monday, zero-filled up to the current week over the same 12-month horizon. First
    page only; ``null`` on cursor pages."""

    chart_events: OptionalNullable[list[InsiderTradeEvent]] = UNSET
    """Every event of the trailing 12 months, both sides, independent of the paginated list below — a chart never shows
    a bar without its marks. First page only; ``null`` on cursor pages."""

    events: list[InsiderTradeEvent]
    """One page of the event history, newest first; honors ``side``."""

    next_cursor: str | None
    """Opaque cursor for the next (older) page; ``null`` at the end of the recorded history."""


class TickerInsiderTradesDict(TypedDict):
    ticker: str
    coverage_start: NotRequired[Date | None]
    summary: NotRequired[InsiderTradesSummaryDict | None]
    series: NotRequired[list[InsiderTradesMonthBucketDict] | None]
    series_weekly: NotRequired[list[InsiderTradesWeekBucketDict] | None]
    chart_events: NotRequired[list[InsiderTradeEventDict] | None]
    events: list[InsiderTradeEventDict]
    next_cursor: str | None
