from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.low_confidence_reason import LowConfidenceReasonOrStr
from .enums.verdict import VerdictOrStr
from .segment import Segment, SegmentDict


class Result(SdkBaseModel):
    low_confidence: Optional[bool] = UNSET
    """True when the input is of a kind with a higher false-positive rate; see low_confidence_reasons."""

    low_confidence_reasons: Optional[list[LowConfidenceReasonOrStr]] = UNSET
    """short_text: under 500 characters. list_format: mostly bullet or numbered lines."""

    segments: Optional[list[Segment]] = UNSET
    """Contiguous passages of sentences scoring >= 0.5, as character offsets into text, with their length-weighted
    score. Absent when sentence offsets are unavailable."""

    verdict: Optional[VerdictOrStr] = UNSET
    """Plain-language summary: mixed when part of the text scores as AI (ai_fraction >= 0.2) or the overall score is >=
    0.5 with less than 80% of the text scoring as AI. Absent if the text could not be scored."""


class ResultDict(TypedDict):
    low_confidence: NotRequired[bool]
    low_confidence_reasons: NotRequired[list[LowConfidenceReasonOrStr]]
    segments: NotRequired[list[SegmentDict]]
    verdict: NotRequired[VerdictOrStr]
