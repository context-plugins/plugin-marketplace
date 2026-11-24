from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.low_confidence_reason import LowConfidenceReasonOrStr
from .enums.report_skip_reason import ReportSkipReasonOrStr
from .enums.verdict import VerdictOrStr
from .report import Report, ReportDict
from .segment import Segment, SegmentDict
from .source import Source, SourceDict
from .usage import Usage, UsageDict


class ApiV1UrlAidetectResponse(SdkBaseModel):
    ai_fraction: Optional[float] = UNSET
    low_confidence: Optional[bool] = UNSET
    """True when the input is of a kind with a higher false-positive rate; see low_confidence_reasons."""

    low_confidence_reasons: Optional[list[LowConfidenceReasonOrStr]] = UNSET
    """short_text: under 500 characters. list_format: mostly bullet or numbered lines."""

    report: Optional[Report] = UNSET
    """The shareable report for this result (create_report: true), or null when none was made."""

    report_skip_reason: Optional[ReportSkipReasonOrStr] = UNSET
    """Why report is null: nonpersist (team keeps no data), disabled (AI detector history off), text_not_retained
    (history keeps no text), unconfirmed_email, quota (history full), unscorable, error."""

    score: Optional[float] = UNSET
    segments: Optional[list[Segment]] = UNSET
    """Contiguous passages of sentences scoring >= 0.5, as character offsets into text, with their length-weighted
    score. Absent when sentence offsets are unavailable."""

    sentence_scores: Optional[list[Any]] = UNSET
    source: Optional[Source] = UNSET
    text: Optional[str] = UNSET
    usage: Optional[Usage] = UNSET
    """Present only when the request sent return_usage: true. characters is the billable character count the request
    submitted; see the return_usage request field for the exact semantics."""

    verdict: Optional[VerdictOrStr] = UNSET
    """Plain-language summary: mixed when part of the text scores as AI (ai_fraction >= 0.2) or the overall score is >=
    0.5 with less than 80% of the text scoring as AI. Absent if the text could not be scored."""

    version: Optional[str] = UNSET


class ApiV1UrlAidetectResponseDict(TypedDict):
    ai_fraction: NotRequired[float]
    low_confidence: NotRequired[bool]
    low_confidence_reasons: NotRequired[list[LowConfidenceReasonOrStr]]
    report: NotRequired[ReportDict]
    report_skip_reason: NotRequired[ReportSkipReasonOrStr]
    score: NotRequired[float]
    segments: NotRequired[list[SegmentDict]]
    sentence_scores: NotRequired[list[Any]]
    source: NotRequired[SourceDict]
    text: NotRequired[str]
    usage: NotRequired[UsageDict]
    verdict: NotRequired[VerdictOrStr]
    version: NotRequired[str]
