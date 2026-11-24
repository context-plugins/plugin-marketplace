from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .enums.table_scale import TableScaleOrStr
from .enums.verdict import VerdictOrStr
from .guidance import Guidance, GuidanceDict
from .key_metric import KeyMetric, KeyMetricDict
from .quote import Quote, QuoteDict
from .segment import Segment, SegmentDict
from .vs_prior_guidance import VsPriorGuidance, VsPriorGuidanceDict


class EarningsReport(SdkBaseModel):
    """AlphAI's own structured analysis of an earnings release (SEC Form 8-K item 2.02, or Form 6-K for a foreign
    private issuer — half-year and full-year periods, IFRS and non-USD figures copied as reported). Every figure was
    cross-checked against the filing text before storage; consensus estimates and price targets are omitted because they
    are not in the filing. MCP ``alphai_article`` returns the structured read; connector ``fetch`` includes its metrics,
    comparisons, segments, guidance and limitations in the citation-ready ``text`` when a completed read exists."""

    company: str
    ticker: str
    fiscal_period: str
    period_end: OptionalNullable[str] = UNSET
    headline: str
    verdict: VerdictOrStr
    verdict_reason: Optional[str] = UNSET
    key_metrics: list[KeyMetric]
    segments: Optional[list[Segment]] = UNSET
    guidance: OptionalNullable[Guidance] = UNSET
    vs_prior_guidance: Optional[list[VsPriorGuidance]] = UNSET
    """Reported figure vs the company's own prior outlook, when available."""

    capital_returns: Optional[list[str]] = UNSET
    balance_sheet_cash_flow: Optional[list[str]] = UNSET
    drivers: Optional[list[str]] = UNSET
    concerns: Optional[list[str]] = UNSET
    what_to_watch: Optional[list[str]] = UNSET
    quotes: Optional[list[Quote]] = UNSET
    analysis: str
    """Several paragraphs of grounded analysis."""

    missing_items: Optional[list[str]] = UNSET
    """What the filing did NOT state, named rather than guessed."""

    numbers_verified_from_document: Optional[bool] = UNSET
    table_scale: OptionalNullable[TableScaleOrStr] = UNSET
    """The unit the filing's own table headers name (``(In millions, except per share data)``). The prose and list
    fields (``analysis``, ``balance_sheet_cash_flow``, ``capital_returns``, ``concerns``, …) quote table figures as
    printed, so in a read with ``table_scale: millions`` a bare ``$36,197`` there is $36,197 million; per-share figures
    are always as printed. Null when the headers name no unit or name two without a clear majority. Added 2026-10-01 to
    every stored read."""


class EarningsReportDict(TypedDict):
    company: str
    ticker: str
    fiscal_period: str
    period_end: NotRequired[str | None]
    headline: str
    verdict: VerdictOrStr
    verdict_reason: NotRequired[str]
    key_metrics: list[KeyMetricDict]
    segments: NotRequired[list[SegmentDict]]
    guidance: NotRequired[GuidanceDict | None]
    vs_prior_guidance: NotRequired[list[VsPriorGuidanceDict]]
    capital_returns: NotRequired[list[str]]
    balance_sheet_cash_flow: NotRequired[list[str]]
    drivers: NotRequired[list[str]]
    concerns: NotRequired[list[str]]
    what_to_watch: NotRequired[list[str]]
    quotes: NotRequired[list[QuoteDict]]
    analysis: str
    missing_items: NotRequired[list[str]]
    numbers_verified_from_document: NotRequired[bool]
    table_scale: NotRequired[TableScaleOrStr | None]
