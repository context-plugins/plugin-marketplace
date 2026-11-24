from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class InsiderTradesWindow(SdkBaseModel):
    """Event-level aggregates over one rolling window. Counts here are grouped EVENTS, not tranches, so they run lower
    than the transaction counts of ``/api/symbols/{ticker}/insider-summary/``."""

    buy_count: int
    sell_count: int
    buy_value_usd: OptionalNullable[str] = UNSET
    """Decimal string in USD; null when the window has no priced buys."""

    sell_value_usd: OptionalNullable[str] = UNSET
    """Decimal string in USD; null when the window has no priced sells."""

    unique_insiders: int
    """Distinct reporting owners in the window."""

    pct_10b5_1: int
    """Share of the window's events executed under a pre-arranged 10b5-1 plan, in percent."""


class InsiderTradesWindowDict(TypedDict):
    buy_count: int
    sell_count: int
    buy_value_usd: NotRequired[str | None]
    sell_value_usd: NotRequired[str | None]
    unique_insiders: int
    pct_10b5_1: int
