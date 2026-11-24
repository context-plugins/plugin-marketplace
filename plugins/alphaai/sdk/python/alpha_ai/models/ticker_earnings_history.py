from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, OptionalNullable, SdkBaseModel
from .ticker_earnings_report import TickerEarningsReport, TickerEarningsReportDict


class TickerEarningsHistory(SdkBaseModel):
    ticker: str
    """The requested ticker, normalized to upper case."""

    reports: list[TickerEarningsReport]
    """Newest first, capped at 20. Empty when no read exists yet."""

    next_report_date: OptionalNullable[Date] = UNSET
    """Same field, same rules, as ``next_report_date`` on the symbol detail response: the company-confirmed date of the
    next report in America/New_York, or ``null`` when AlphAI holds no confirmed one. Never an estimate."""


class TickerEarningsHistoryDict(TypedDict):
    ticker: str
    reports: list[TickerEarningsReportDict]
    next_report_date: NotRequired[Date | None]
