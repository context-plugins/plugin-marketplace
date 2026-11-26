from __future__ import annotations

from typing_extensions import TypedDict

from ..core import Date, SdkBaseModel
from .enums.reason import ReasonOrStr
from .enums.role import RoleOrStr


class ClusterBuyer(SdkBaseModel):
    name: str
    title: str
    is_officer: bool
    is_director: bool
    is_ten_percent_owner: bool
    role: RoleOrStr
    """``independent`` counts toward the cluster. ``plan_like``: the buyer's fills all share an exact date-and-price
    pair with another buyer's (an allocation, an ESPP/DRIP lot), match another direct holder's lot at a round price, or
    the filing itself says the shares were not bought on the open market (then ``reason`` is set). ``unpriced``: no fill
    carries a price (units, exchanges). ``duplicate_of``: the same transaction another reporter already reported;
    ``duplicate_of`` names that reporter."""

    reason: ReasonOrStr | None
    """Set on a ``plan_like`` buyer when the Form 4's own footnotes or remarks decided it: ``placement`` — bought from
    the issuer (a PIPE, a subscription or securities purchase agreement, SPAC sponsor units); ``offering`` — allocated
    in a public offering or IPO; ``private`` — a negotiated block from another holder (a stock transfer agreement, a
    private transaction). Null when the price shape alone decided the role. Read by the collector since 2026-09-26;
    earlier filings are backfilled for 90 days."""

    duplicate_of: str | None
    fills: int
    usd: str | None
    """Sum of this buyer's priced fills (decimal string)."""

    first_date: Date
    last_date: Date
    news_uids: list[str]
    """The ``uid``s of the insider news rows fronting this buyer's filings — fetch ``/api/news/{uid}/`` for the
    event."""


class ClusterBuyerDict(TypedDict):
    name: str
    title: str
    is_officer: bool
    is_director: bool
    is_ten_percent_owner: bool
    role: RoleOrStr
    reason: ReasonOrStr | None
    duplicate_of: str | None
    fills: int
    usd: str | None
    first_date: Date
    last_date: Date
    news_uids: list[str]
