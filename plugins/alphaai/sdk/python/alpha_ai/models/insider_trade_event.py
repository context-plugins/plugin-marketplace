from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.ownership_form_alph_ai_rest_symbols_api import OwnershipFormAlphAiRestSymbolsApiOrStr
from .enums.side_alph_ai_rest_symbols_api import SideAlphAiRestSymbolsApiOrStr


class InsiderTradeEvent(SdkBaseModel):
    """One Form 4 economic event, same folding as the feed's ``InsiderEvent`` (a filing's whole tranche group:
    ``shares`` and ``total_value_usd`` are group sums, ``avg_price_usd`` is value-weighted over priced tranches, money
    and share fields are decimal STRINGS). Differences from the feed block: ``side`` here is only ``buy`` or ``sell`` (D
    counts as sell, see the endpoint description), and each event adds its stake impact, tranche count and the link to
    our enriched article."""

    side: SideAlphAiRestSymbolsApiOrStr
    """Value-flow label; ``transaction_code`` carries the raw code."""

    transaction_code: str
    """Raw SEC Form 4 transaction code (``P``, ``S``, ``D``)."""

    ownership_form: OwnershipFormAlphAiRestSymbolsApiOrStr
    """Direct or indirect holding pool."""

    security_title: Optional[str] = UNSET
    """Security class from the filing; empty when unreported."""

    shares: str
    """Total shares across the event's tranches (decimal string)."""

    avg_price_usd: OptionalNullable[str] = UNSET
    """Value-weighted average price per share over priced tranches. ``null`` when the filing prices no tranche."""

    total_value_usd: OptionalNullable[str] = UNSET
    """Total USD value across priced tranches (a lower bound when some tranches are unpriced). ``null`` when no tranche
    is priced."""

    tranche_count: int
    """Fills folded into this event (a 10b5-1 ladder files many)."""

    stake_change_pct: OptionalNullable[str] = UNSET
    """Percent of the pre-event position this event moved, as a decimal string; sells are negative ("-26.0" = sold 26%
    of the stake). ``null`` when the pre-event position cannot be reconstructed."""

    is_10b5_1: bool
    """True when any tranche executed under a pre-arranged 10b5-1 plan."""

    late_filing: bool
    """The filing missed the SEC's two-business-day deadline, computed the same way as the feed's
    ``InsiderEvent.late_filing``."""

    insider_name: str
    insider_title: str
    is_officer: bool
    is_director: bool
    is_ten_percent_owner: bool
    transaction_date: Date
    """Date of the group's last fill (a ladder can span days)."""

    filed_at: RFC3339DateTime
    """When EDGAR accepted the filing (UTC)."""

    news_uid: str
    """Uid of the enriched news row fronting this event; matches ``original.uid`` in the feeds."""

    news_title: str
    news_published: RFC3339DateTime
    """Publish time of the fronting news row."""

    has_article: bool
    """Whether the alphai.io article page for ``news_uid`` exists. Events ingested by the historical backfill have no
    enriched article; render those without a link."""


class InsiderTradeEventDict(TypedDict):
    side: SideAlphAiRestSymbolsApiOrStr
    transaction_code: str
    ownership_form: OwnershipFormAlphAiRestSymbolsApiOrStr
    security_title: NotRequired[str]
    shares: str
    avg_price_usd: NotRequired[str | None]
    total_value_usd: NotRequired[str | None]
    tranche_count: int
    stake_change_pct: NotRequired[str | None]
    is_10b5_1: bool
    late_filing: bool
    insider_name: str
    insider_title: str
    is_officer: bool
    is_director: bool
    is_ten_percent_owner: bool
    transaction_date: Date
    filed_at: RFC3339DateTime
    news_uid: str
    news_title: str
    news_published: RFC3339DateTime
    has_article: bool
