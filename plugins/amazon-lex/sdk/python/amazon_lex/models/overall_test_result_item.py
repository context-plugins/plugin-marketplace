from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class OverallTestResultItem(SdkBaseModel):
    multi_turn_conversation: bool = Field(alias="multiTurnConversation")
    """Indicates whether the conversation contains multiple turns or not."""

    total_result_count: int = Field(alias="totalResultCount")
    """The total number of overall results in the result of the test execution."""

    speech_transcription_result_counts: Optional[dict[str, int]] = Field(
        default=UNSET, alias="speechTranscriptionResultCounts"
    )
    """The number of speech transcription results in the overall test."""

    end_to_end_result_counts: dict[str, int] = Field(alias="endToEndResultCounts")
    """The number of results that succeeded."""


class OverallTestResultItemDict(TypedDict):
    multi_turn_conversation: bool
    total_result_count: int
    speech_transcription_result_counts: NotRequired[dict[str, int]]
    end_to_end_result_counts: dict[str, int]
