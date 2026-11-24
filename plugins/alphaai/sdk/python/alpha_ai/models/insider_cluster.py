from __future__ import annotations

from typing_extensions import TypedDict

from ..core import Date, RFC3339DateTime, SdkBaseModel
from .cluster_buyer import ClusterBuyer, ClusterBuyerDict
from .cluster_filing import ClusterFiling, ClusterFilingDict
from .enums.pattern import PatternOrStr


class InsiderCluster(SdkBaseModel):
    """One issuer's run of Form 4 purchases and its verdict. Money fields are decimal STRINGS. ``buyers`` counts
    independent buyers (the cluster); ``buyers_total`` everyone who bought, including plan, unpriced and duplicate
    reporters."""

    ticker: str
    name: str
    cik: int
    """SEC Central Index Key of the issuer."""

    window_start: Date
    """First purchase date of the episode."""

    window_end: Date
    """Last purchase date of the episode."""

    known_at: RFC3339DateTime
    """When the episode's latest filing reached EDGAR — the clock ``days`` is measured on."""

    buyers: int
    """Independent buyers."""

    buyers_total: int
    """Every distinct reporting owner after duplicate merging."""

    officer_director_buyers: int
    """Independent buyers who are an officer or director."""

    ten_percent_owner_buyers: int
    """Independent buyers flagged as 10% owners."""

    fills: int
    """Purchase tranches counted (a transaction reported twice is counted once)."""

    filings: int
    """Distinct Form 4 filings."""

    total_usd: str | None
    """Sum of the counted tranches' values (decimal string); ``null`` when no tranche carries a price."""

    value_partial: bool
    """``true`` when at least one counted tranche has no price, so ``total_usd`` understates the episode."""

    distinct_dates: int
    distinct_prices: int
    """Distinct prices to the cent across priced tranches."""

    pattern: PatternOrStr
    pattern_reasons: list[str]
    """Machine-readable notes behind the verdict, e.g. ``mass_uniform_date_price``, ``same_price_across_dates``,
    ``one_price_multi_date``, ``plan_like_buyers``, ``off_market_buyers`` (a buyer whose filing says placement /
    offering / private), ``unpriced_buyers``, ``duplicate_filings``, ``no_officer_or_director``."""

    buyers_detail: list[ClusterBuyer]
    filings_detail: list[ClusterFiling]


class InsiderClusterDict(TypedDict):
    ticker: str
    name: str
    cik: int
    window_start: Date
    window_end: Date
    known_at: RFC3339DateTime
    buyers: int
    buyers_total: int
    officer_director_buyers: int
    ten_percent_owner_buyers: int
    fills: int
    filings: int
    total_usd: str | None
    value_partial: bool
    distinct_dates: int
    distinct_prices: int
    pattern: PatternOrStr
    pattern_reasons: list[str]
    buyers_detail: list[ClusterBuyerDict]
    filings_detail: list[ClusterFilingDict]
