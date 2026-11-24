from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel


class Symbol(SdkBaseModel):
    symbol: str
    name: str
    asset_type: Optional[str] = UNSET
    """``Stock``, ``ETF``, or ``Crypto``."""

    exchange: Optional[str] = UNSET
    """TradingView exchange prefix. US: NYSE / NASDAQ / AMEX / OTC / CBOE (from SEC's exchange mapping). Foreign
    listings carry their venue prefix (LSE, XETR, EURONEXT, TSE, HKEX, KRX, …); crypto carries the ``CRYPTO`` sentinel.
    Empty string when unknown."""

    sector: Optional[str] = UNSET
    industry: Optional[str] = UNSET
    description: Optional[str] = UNSET
    website: OptionalNullable[str] = UNSET
    brand_aliases: Optional[list[str]] = UNSET
    """Lowercase names the issuer is known by, when they differ from ``name`` (``["spacex"]`` on SPCX, registered as
    SPACE EXPLORATION TECHNOLOGIES CORP). Use them to match a name a user typed against a ticker. Usually empty: most
    issuers are already reachable by their registered name. List responses only."""

    country: Optional[str] = UNSET
    """ISO alpha-2 country of domicile. ``US`` for SEC-listed symbols, the listing venue's country for foreign listings.
    Empty for crypto — a coin has no domicile."""

    currency: Optional[str] = UNSET
    """Trading currency. ``USD`` for SEC-listed symbols and crypto pairs, the local currency for foreign listings."""

    next_report_date: OptionalNullable[Date] = UNSET
    """The next earnings date the company itself has confirmed, in America/New_York. Detail responses only.

    **Never an estimate.** ``null`` means AlphAI holds no confirmed date — NOT that the company does not report.
    Confirmed dates typically surface about five weeks ahead, so ``null`` further out is the normal state, and coverage
    at any moment is partial. We deliberately do not fill the gap with a projection from the reporting cadence: a date
    nothing corroborates is indistinguishable downstream from one that does.

    Bridges share classes: a request for one class answers with the issuer's confirmed date whichever class it was filed
    under."""

    supports_insider: Optional[bool] = UNSET
    """Whether this symbol has SEC Form 4 insider data — true for US SEC-listed equities, false for exchange-traded
    funds (``asset_type`` ``ETF``), crypto and foreign listings. When false, ``/insider-summary/`` and
    ``/insider-trades/`` return empty rather than failing. Detail responses only."""

    crypto_counterpart: OptionalNullable[str] = UNSET
    """When this symbol owns a bare string an ACTIVE cryptocurrency also answers to (delisted SOL = Emeren Group vs the
    coin SOL-USD, BTC = Grayscale ETF vs BTC-USD), the coin's ticker. ``null`` for symbols without an active crypto
    twin. Detail responses only."""

    crypto_counterpart_name: Optional[str] = UNSET
    """Display name of ``crypto_counterpart`` (empty when it is null). Detail responses only."""

    tv_symbol: Optional[str] = UNSET
    """Per-symbol TradingView symbol override, when the venue-prefix rule built from ``exchange`` does not produce the
    right chart symbol. Empty for almost every row. Detail responses only."""

    status: Optional[str] = UNSET
    """Listing status, ``active`` or ``delisted``. Delisted symbols stay resolvable on this endpoint so their news
    history remains reachable."""

    delisted_at: OptionalNullable[RFC3339DateTime] = UNSET
    """When the symbol was marked delisted. Null for active symbols and for symbols delisted before July 2026."""

    renamed_to: Optional[str] = UNSET
    """Set on a delisted symbol when the company continues under a new ticker (for example SATS became ECHO). Empty
    otherwise."""


class SymbolDict(TypedDict):
    symbol: str
    name: str
    asset_type: NotRequired[str]
    exchange: NotRequired[str]
    sector: NotRequired[str]
    industry: NotRequired[str]
    description: NotRequired[str]
    website: NotRequired[str | None]
    brand_aliases: NotRequired[list[str]]
    country: NotRequired[str]
    currency: NotRequired[str]
    next_report_date: NotRequired[Date | None]
    supports_insider: NotRequired[bool]
    crypto_counterpart: NotRequired[str | None]
    crypto_counterpart_name: NotRequired[str]
    tv_symbol: NotRequired[str]
    status: NotRequired[str]
    delisted_at: NotRequired[RFC3339DateTime | None]
    renamed_to: NotRequired[str]
