from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class IntentClassificationTestResultItemCounts(SdkBaseModel):
    total_result_count: int = Field(alias="totalResultCount")
    """The total number of results in the intent classification test."""

    speech_transcription_result_counts: Optional[dict[str, int]] = Field(
        default=UNSET, alias="speechTranscriptionResultCounts"
    )
    """The number of matched, mismatched, and execution error results for speech transcription for the intent."""

    intent_match_result_counts: dict[str, int] = Field(alias="intentMatchResultCounts")
    """The number of matched and mismatched results for intent recognition for the intent."""


class IntentClassificationTestResultItemCountsDict(TypedDict):
    total_result_count: int
    speech_transcription_result_counts: NotRequired[dict[str, int]]
    intent_match_result_counts: dict[str, int]
