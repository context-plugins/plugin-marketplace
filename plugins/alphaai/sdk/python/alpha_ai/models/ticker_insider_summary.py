from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .top_insider import TopInsider, TopInsiderDict


class TickerInsiderSummary(SdkBaseModel):
    ticker: str
    days: int
    total_transactions: int
    buy_count: int
    sell_count: int
    buy_value_usd: OptionalNullable[str] = UNSET
    """Decimal string in USD; null when the window has no buys."""

    sell_value_usd: OptionalNullable[str] = UNSET
    """Decimal string in USD; null when the window has no sells."""

    pct_10b5_1: int
    """Share of transactions executed under a pre-arranged 10b5-1 plan, in percent."""

    top_insiders: list[TopInsider]


class TickerInsiderSummaryDict(TypedDict):
    ticker: str
    days: int
    total_transactions: int
    buy_count: int
    sell_count: int
    buy_value_usd: NotRequired[str | None]
    sell_value_usd: NotRequired[str | None]
    pct_10b5_1: int
    top_insiders: list[TopInsiderDict]
