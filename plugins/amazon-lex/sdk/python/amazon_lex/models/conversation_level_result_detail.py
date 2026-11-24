from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.end_to_end_result import EndToEndResultOrStr
from .enums.speech_transcription_result import SpeechTranscriptionResultOrStr


class ConversationLevelResultDetail(SdkBaseModel):
    end_to_end_result: EndToEndResultOrStr = Field(alias="endToEndResult")
    """The success or failure of the streaming of the conversation."""

    speech_transcription_result: Optional[SpeechTranscriptionResultOrStr] = Field(
        default=UNSET, alias="speechTranscriptionResult"
    )
    """The speech transcription success or failure details of the conversation."""


class ConversationLevelResultDetailDict(TypedDict):
    end_to_end_result: EndToEndResultOrStr
    speech_transcription_result: NotRequired[SpeechTranscriptionResultOrStr]
