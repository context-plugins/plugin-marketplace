from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class MetaScope(SdkBaseModel):
    """Headline counts for the slice currently being served — the live figure any copy should track.

    ⚠️ THE TWO YEAR ENDS ARE DIFFERENT NUMBERS AND BOTH ARE PUBLISHED. ``last_fiscal_year`` is max(tax_year) — sync a
    mirrored copy against it. ``last_complete_fiscal_year`` is the newest year that has stopped filling, and it is the
    one prose should quote: the IRS lag means the corpus always carries a few hundred early filings for a barely-started
    year, so max(tax_year) reads a year or two ahead of the coverage anyone would recognise. Publishing only the first
    is what put /meta at FY2026 while every page on the site said FY2025 (2026-08 audit)."""

    grants: Optional[int] = UNSET
    total_amount: Optional[int] = UNSET
    funders: Optional[int] = UNSET
    first_fiscal_year: Optional[int] = UNSET
    last_fiscal_year: Optional[int] = UNSET
    """Newest fiscal year any row falls in — max(tax_year), including years still arriving. Sync against this; do not
    quote it as the coverage span."""

    last_complete_fiscal_year: Optional[int] = UNSET
    """Newest fiscal year that has finished arriving — the span to quote. Null on a slice too thin to measure, never
    guessed."""

    partial_fiscal_years: Optional[list[int]] = UNSET
    """Fiscal years still filling. Measured the same way /data-quality measures it: a trailing year holding less than
    90% of the year before it has not finished arriving. The newest year is always here."""


class MetaScopeDict(TypedDict):
    grants: NotRequired[int]
    total_amount: NotRequired[int]
    funders: NotRequired[int]
    first_fiscal_year: NotRequired[int]
    last_fiscal_year: NotRequired[int]
    last_complete_fiscal_year: NotRequired[int]
    partial_fiscal_years: NotRequired[list[int]]
