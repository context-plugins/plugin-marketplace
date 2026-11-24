from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.low_confidence_reason import LowConfidenceReasonOrStr
from .enums.verdict import VerdictOrStr
from .segment import Segment, SegmentDict
from .sentence_score import SentenceScore, SentenceScoreDict
from .usage import Usage, UsageDict


class ApiV1DocxAidetectResponse(SdkBaseModel):
    ai_fraction: Optional[float] = UNSET
    """Share (0-1) of the text in sentences scoring >= 0.5; reports partially AI-written documents whose overall score
    stays below 0.5."""

    low_confidence: Optional[bool] = UNSET
    """True when the input is of a kind with a higher false-positive rate; see low_confidence_reasons."""

    low_confidence_reasons: Optional[list[LowConfidenceReasonOrStr]] = UNSET
    """short_text: under 500 characters. list_format: mostly bullet or numbered lines."""

    score: Optional[float] = UNSET
    score_string: Optional[str] = UNSET
    segments: Optional[list[Segment]] = UNSET
    """Contiguous passages of sentences scoring >= 0.5, as character offsets into text, with their length-weighted
    score. Absent when sentence offsets are unavailable."""

    sentence_scores: Optional[list[SentenceScore]] = UNSET
    text: Optional[str] = UNSET
    usage: Optional[Usage] = UNSET
    """Present only when the request sent return_usage: true. characters is the billable character count the request
    submitted; see the return_usage request field for the exact semantics."""

    verdict: Optional[VerdictOrStr] = UNSET
    """Plain-language summary: mixed when part of the text scores as AI (ai_fraction >= 0.2) or the overall score is >=
    0.5 with less than 80% of the text scoring as AI. Absent if the text could not be scored."""

    version: Optional[str] = UNSET


class ApiV1DocxAidetectResponseDict(TypedDict):
    ai_fraction: NotRequired[float]
    low_confidence: NotRequired[bool]
    low_confidence_reasons: NotRequired[list[LowConfidenceReasonOrStr]]
    score: NotRequired[float]
    score_string: NotRequired[str]
    segments: NotRequired[list[SegmentDict]]
    sentence_scores: NotRequired[list[SentenceScoreDict]]
    text: NotRequired[str]
    usage: NotRequired[UsageDict]
    verdict: NotRequired[VerdictOrStr]
    version: NotRequired[str]
