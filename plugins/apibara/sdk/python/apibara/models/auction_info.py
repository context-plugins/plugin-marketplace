from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.outcome_status import OutcomeStatusOrStr


class AuctionInfo(SdkBaseModel):
    state: Optional[str] = UNSET
    auction_at: OptionalNullable[RFC3339DateTime] = UNSET
    lot_status: Optional[str] = UNSET
    lot_sub_status: Optional[str] = UNSET
    last_sold_day: OptionalNullable[Date] = UNSET
    """Last known sale-outcome day. Placeholder dates before year 2000 are normalized to null."""

    last_sold_at: OptionalNullable[RFC3339DateTime] = UNSET
    """Exact source-backed sale/outcome observation timestamp when available. Null when only a day-level sale date is
    known."""

    last_sold_status: OptionalNullable[str] = UNSET
    outcome_status: OptionalNullable[OutcomeStatusOrStr] = UNSET
    """Explicit normalized outcome only; elapsed time alone is not treated as a sale."""

    auction_ended_at: OptionalNullable[RFC3339DateTime] = UNSET
    """Best known completed-auction/outcome timestamp. Prefers source-backed sale/outcome evidence; otherwise may use a
    past scheduled auction timestamp. Never uses a future schedule as an ended timestamp."""

    outcome_observed_at: OptionalNullable[RFC3339DateTime] = UNSET
    """Timestamp when the current outcome was observed/persisted. Prefers source-backed sale evidence; falls back to the
    persisted vehicle update timestamp when exact source timing is unavailable."""

    lot_removed: Optional[bool] = UNSET
    """Source/parser evidence that the lot was removed from active inventory."""

    sold_buy_now: Optional[bool] = UNSET
    sold_timed: Optional[bool] = UNSET
    auction_date_pending: Optional[bool] = UNSET
    """True when the imported active lot has no assigned auction date. auction_at and ad are null. Explicit auction-date
    filters exclude these records."""


class AuctionInfoDict(TypedDict):
    state: NotRequired[str]
    auction_at: NotRequired[RFC3339DateTime | None]
    lot_status: NotRequired[str]
    lot_sub_status: NotRequired[str]
    last_sold_day: NotRequired[Date | None]
    last_sold_at: NotRequired[RFC3339DateTime | None]
    last_sold_status: NotRequired[str | None]
    outcome_status: NotRequired[OutcomeStatusOrStr | None]
    auction_ended_at: NotRequired[RFC3339DateTime | None]
    outcome_observed_at: NotRequired[RFC3339DateTime | None]
    lot_removed: NotRequired[bool]
    sold_buy_now: NotRequired[bool]
    sold_timed: NotRequired[bool]
    auction_date_pending: NotRequired[bool]
