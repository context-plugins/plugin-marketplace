from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .also_listed_on import AlsoListedOn, AlsoListedOnDict
from .exchange import Exchange, ExchangeDict


class CompanySummary(SdkBaseModel):
    id: str
    """Unique company identifier"""

    name: str
    """Company name"""

    slug: str
    """URL-friendly company name"""

    ticker: OptionalNullable[str] = UNSET
    """Primary stock ticker (null if unlisted)"""

    former_tickers: list[str]
    """Tickers the company was formerly listed under, from delisted or renamed listings, excluding any that are still a
    current ticker. Always present; empty when none. The ticker filter resolves former tickers as well as the current
    one, so a match on an old ticker still returns the company; this field tells you the ticker you searched by is
    historical."""

    is_active: Optional[bool] = UNSET
    """Whether the company is currently active/operating"""

    exchange: OptionalNullable[Exchange] = UNSET
    """Primary exchange where the company is listed"""

    also_listed_on: list[AlsoListedOn]
    """The company's other active listings, excluding the primary listing above: cross-listings on other exchanges and
    additional share classes (which may be on the same exchange). Always present; empty when the company is
    single-listed or unlisted. The row's ticker/exchange fields are the primary listing only. Company detail
    stock_listings is the authoritative full set."""


class CompanySummaryDict(TypedDict):
    id: str
    name: str
    slug: str
    ticker: NotRequired[str | None]
    former_tickers: list[str]
    is_active: NotRequired[bool]
    exchange: NotRequired[ExchangeDict | None]
    also_listed_on: list[AlsoListedOnDict]
