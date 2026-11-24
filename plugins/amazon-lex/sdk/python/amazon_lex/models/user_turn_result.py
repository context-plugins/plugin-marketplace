from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .conversation_level_result_detail import ConversationLevelResultDetail, ConversationLevelResultDetailDict
from .enums.end_to_end_result3 import EndToEndResult3OrStr
from .enums.intent_match_result import IntentMatchResultOrStr
from .enums.slot_match_result import SlotMatchResultOrStr
from .enums.speech_transcription_result2 import SpeechTranscriptionResult2OrStr
from .execution_error_details import ExecutionErrorDetails, ExecutionErrorDetailsDict
from .user_turn_input_specification import UserTurnInputSpecification, UserTurnInputSpecificationDict
from .user_turn_output_specification import UserTurnOutputSpecification, UserTurnOutputSpecificationDict


class UserTurnResult(SdkBaseModel):
    input: UserTurnInputSpecification
    expected_output: UserTurnOutputSpecification = Field(alias="expectedOutput")
    actual_output: Optional[UserTurnOutputSpecification] = Field(default=UNSET, alias="actualOutput")
    error_details: Optional[ExecutionErrorDetails] = Field(default=UNSET, alias="errorDetails")
    end_to_end_result: Optional[EndToEndResult3OrStr] = Field(default=UNSET, alias="endToEndResult")
    """Specifies whether the expected and actual outputs match or not, or if there is an error in execution."""

    intent_match_result: Optional[IntentMatchResultOrStr] = Field(default=UNSET, alias="intentMatchResult")
    """Specifies whether the expected and actual intents match or not."""

    slot_match_result: Optional[SlotMatchResultOrStr] = Field(default=UNSET, alias="slotMatchResult")
    """Specifies whether the expected and actual slots match or not."""

    speech_transcription_result: Optional[SpeechTranscriptionResult2OrStr] = Field(
        default=UNSET, alias="speechTranscriptionResult"
    )
    """Specifies whether the expected and actual speech transcriptions match or not, or if there is an error in
    execution."""

    conversation_level_result: Optional[ConversationLevelResultDetail] = Field(
        default=UNSET, alias="conversationLevelResult"
    )


class UserTurnResultDict(TypedDict):
    input: UserTurnInputSpecificationDict
    expected_output: UserTurnOutputSpecificationDict
    actual_output: NotRequired[UserTurnOutputSpecificationDict]
    error_details: NotRequired[ExecutionErrorDetailsDict]
    end_to_end_result: NotRequired[EndToEndResult3OrStr]
    intent_match_result: NotRequired[IntentMatchResultOrStr]
    slot_match_result: NotRequired[SlotMatchResultOrStr]
    speech_transcription_result: NotRequired[SpeechTranscriptionResult2OrStr]
    conversation_level_result: NotRequired[ConversationLevelResultDetailDict]
