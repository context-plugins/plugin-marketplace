from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .conversation_level_intent_classification_result_item import (
    ConversationLevelIntentClassificationResultItem,
    ConversationLevelIntentClassificationResultItemDict,
)
from .conversation_level_slot_resolution_result_item import (
    ConversationLevelSlotResolutionResultItem,
    ConversationLevelSlotResolutionResultItemDict,
)
from .enums.end_to_end_result1 import EndToEndResult1OrStr
from .enums.speech_transcription_result1 import SpeechTranscriptionResult1OrStr


class ConversationLevelTestResultItem(SdkBaseModel):
    conversation_id: str = Field(alias="conversationId")
    """The conversation Id of the test result evaluation item."""

    end_to_end_result: EndToEndResult1OrStr = Field(alias="endToEndResult")
    """The end-to-end success or failure of the test result evaluation item."""

    speech_transcription_result: Optional[SpeechTranscriptionResult1OrStr] = Field(
        default=UNSET, alias="speechTranscriptionResult"
    )
    """The speech transcription success or failure of the test result evaluation item."""

    intent_classification_results: list[ConversationLevelIntentClassificationResultItem] = Field(
        alias="intentClassificationResults"
    )
    """The intent classification of the test result evaluation item."""

    slot_resolution_results: list[ConversationLevelSlotResolutionResultItem] = Field(alias="slotResolutionResults")
    """The slot success or failure of the test result evaluation item."""


class ConversationLevelTestResultItemDict(TypedDict):
    conversation_id: str
    end_to_end_result: EndToEndResult1OrStr
    speech_transcription_result: NotRequired[SpeechTranscriptionResult1OrStr]
    intent_classification_results: list[ConversationLevelIntentClassificationResultItemDict]
    slot_resolution_results: list[ConversationLevelSlotResolutionResultItemDict]
