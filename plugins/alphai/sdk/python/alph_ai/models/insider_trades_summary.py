from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .insider_trades_top_insider import InsiderTradesTopInsider, InsiderTradesTopInsiderDict
from .insider_trades_window import InsiderTradesWindow, InsiderTradesWindowDict


class InsiderTradesSummary(SdkBaseModel):
    last_3m: InsiderTradesWindow
    """Event-level aggregates over one rolling window. Counts here are grouped EVENTS, not tranches, so they run lower
    than the transaction counts of ``/api/symbols/{ticker}/insider-summary/``."""

    last_12m: InsiderTradesWindow
    """Event-level aggregates over one rolling window. Counts here are grouped EVENTS, not tranches, so they run lower
    than the transaction counts of ``/api/symbols/{ticker}/insider-summary/``."""

    all_time: InsiderTradesWindow
    """Event-level aggregates over one rolling window. Counts here are grouped EVENTS, not tranches, so they run lower
    than the transaction counts of ``/api/symbols/{ticker}/insider-summary/``."""

    top_insiders: list[InsiderTradesTopInsider]
    """Most active reporters of the last 12 months, at most five."""


class InsiderTradesSummaryDict(TypedDict):
    last_3m: InsiderTradesWindowDict
    last_12m: InsiderTradesWindowDict
    all_time: InsiderTradesWindowDict
    top_insiders: list[InsiderTradesTopInsiderDict]
