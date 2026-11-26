from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.side import SideOrStr


class InsiderEvent(SdkBaseModel):
    """Structured SEC Form 4 event: the aggregate of the news row's whole transaction group (one row fronts a filing's
    non-derivative trades of one type and holding form, so a 10b5-1 ladder is ONE event). ``shares`` and
    ``total_value_usd`` are group sums; ``avg_price_usd`` is the value-weighted average over priced tranches. Money and
    share fields are decimal STRINGS to preserve precision."""

    side: SideOrStr
    """Signal label from the transaction code: ``buy`` (P, open-market purchase), ``sell`` (S, open-market sale),
    ``other`` for everything else — including D (sale to the issuer: a buyback/redemption, not an open-market
    disposition). Use ``transaction_code`` for your own mapping."""

    transaction_code: str
    """Raw SEC Form 4 transaction code (``P``, ``S``, ``D``, …)."""

    shares: str
    """Total shares across the event's tranches (decimal string)."""

    avg_price_usd: OptionalNullable[str] = UNSET
    """Value-weighted average price per share over priced tranches. ``null`` when the filing prices no tranche."""

    total_value_usd: OptionalNullable[str] = UNSET
    """Total USD value across priced tranches (a lower bound when some tranches are unpriced). ``null`` when no tranche
    is priced."""

    is_10b5_1: bool
    """True when any tranche executed under a pre-arranged 10b5-1 plan. Filterable on this endpoint:
    ``?is_10b5_1=false`` keeps only discretionary events."""

    insider_name: str
    insider_title: str
    is_officer: bool
    is_director: bool
    is_ten_percent_owner: bool
    transaction_date: Date
    """Date of the group's last fill (a ladder can span days)."""

    filed_at: RFC3339DateTime
    """When EDGAR accepted the filing (UTC). Compare against ``transaction_date`` for your own lateness rule."""

    late_filing: bool
    """The filing missed the SEC's two-business-day deadline (Rule 16a-3(g)). Computed on Eastern dates, since EDGAR
    accepts filings until ~22:00 ET, and with one weekday of slack so a trade in a holiday week is not flagged: true
    when more than three weekday-days separate ``transaction_date`` from the filing. About 3% of events carry it; the
    long tail is catch-up filings covering trades from years earlier."""


class InsiderEventDict(TypedDict):
    side: SideOrStr
    transaction_code: str
    shares: str
    avg_price_usd: NotRequired[str | None]
    total_value_usd: NotRequired[str | None]
    is_10b5_1: bool
    insider_name: str
    insider_title: str
    is_officer: bool
    is_director: bool
    is_ten_percent_owner: bool
    transaction_date: Date
    filed_at: RFC3339DateTime
    late_filing: bool
