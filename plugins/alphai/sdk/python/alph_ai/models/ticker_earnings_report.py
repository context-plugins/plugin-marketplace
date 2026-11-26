from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .earnings_report import EarningsReport, EarningsReportDict
from .enums.source_type_alph_ai_rest_symbols_api import SourceTypeAlphAiRestSymbolsApiOrStr


class TickerEarningsReport(SdkBaseModel):
    """One published AlphAI earnings read in a ticker's history."""

    uid: str
    """Article uid; the same read is served inline by /api/news/{uid}/."""

    time_published: RFC3339DateTime
    title: str
    """The filing's own title."""

    source_type: SourceTypeAlphAiRestSymbolsApiOrStr
    """``sec_form8k`` for a US filer's item 2.02, ``sec_form6k`` for a foreign private issuer's earnings release."""

    ticker: str
    """The share class the filing was actually made under, which is not always the one requested — SEC-sourced rows tag
    one class per issuer, so a GOOGL request carries reads filed under GOOG."""

    fiscal_period: str
    analysis: EarningsReport
    """AlphAI's own structured analysis of an earnings release (SEC Form 8-K item 2.02, or Form 6-K for a foreign
    private issuer — half-year and full-year periods, IFRS and non-USD figures copied as reported). Every figure was
    cross-checked against the filing text before storage; consensus estimates and price targets are omitted because they
    are not in the filing. MCP ``alphai_article`` returns the structured read; connector ``fetch`` includes its metrics,
    comparisons, segments, guidance and limitations in the citation-ready ``text`` when a completed read exists."""


class TickerEarningsReportDict(TypedDict):
    uid: str
    time_published: RFC3339DateTime
    title: str
    source_type: SourceTypeAlphAiRestSymbolsApiOrStr
    ticker: str
    fiscal_period: str
    analysis: EarningsReportDict
