from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SlotResolutionTestResultItemCounts(SdkBaseModel):
    total_result_count: int = Field(alias="totalResultCount")
    """The total number of results."""

    speech_transcription_result_counts: Optional[dict[str, int]] = Field(
        default=UNSET, alias="speechTranscriptionResultCounts"
    )
    """The number of matched, mismatched and execution error results for speech transcription for the slot."""

    slot_match_result_counts: dict[str, int] = Field(alias="slotMatchResultCounts")
    """The number of matched and mismatched results for slot resolution for the slot."""


class SlotResolutionTestResultItemCountsDict(TypedDict):
    total_result_count: int
    speech_transcription_result_counts: NotRequired[dict[str, int]]
    slot_match_result_counts: dict[str, int]
