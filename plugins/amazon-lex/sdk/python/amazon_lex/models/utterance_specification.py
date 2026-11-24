from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.intent_state import IntentStateOrStr
from .enums.mode1 import Mode1OrStr
from .utterance_bot_response import UtteranceBotResponse, UtteranceBotResponseDict


class UtteranceSpecification(SdkBaseModel):
    bot_alias_id: Optional[str] = Field(default=UNSET, alias="botAliasId")
    """The identifier of the alias of the bot that the utterance was made to."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that the utterance was made to."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale of the bot that the utterance was made to."""

    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """The identifier of the session that the utterance was made in."""

    channel: Optional[str] = UNSET
    """The channel that is integrated with the bot that the utterance was made to."""

    mode: Optional[Mode1OrStr] = UNSET
    """The mode of the session. The possible values are as follows: Speech – The session consisted of spoken dialogue.
    Text – The session consisted of written dialogue. DTMF – The session consisted of touch-tone keypad (Dual Tone
    Multi-Frequency) key presses. MultiMode – The session consisted of multiple modes."""

    conversation_start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="conversationStartTime")
    """The date and time when the conversation in which the utterance took place began. A conversation is defined as a
    unique combination of a sessionId and an originatingRequestId."""

    conversation_end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="conversationEndTime")
    """The date and time when the conversation in which the utterance took place ended. A conversation is defined as a
    unique combination of a sessionId and an originatingRequestId."""

    utterance: Optional[str] = UNSET
    """The text of the utterance."""

    utterance_timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="utteranceTimestamp")
    """The date and time when the utterance took place."""

    audio_voice_duration_millis: Optional[int] = Field(default=UNSET, alias="audioVoiceDurationMillis")
    """The duration in milliseconds of the audio associated with the utterance."""

    utterance_understood: Optional[bool] = Field(default=UNSET, alias="utteranceUnderstood")
    """Specifies whether the bot understood the utterance or not."""

    input_type: Optional[str] = Field(default=UNSET, alias="inputType")
    """The input type of the utterance. The possible values are as follows: PCM format: audio data must be in
    little-endian byte order. audio/l16; rate=16000; channels=1 audio/x-l16; sample-rate=16000; channel-count=1
    audio/lpcm; sample-rate=8000; sample-size-bits=16; channel-count=1; is-big-endian=false Opus format
    audio/x-cbr-opus-with-preamble;preamble-size=0;bit-rate=256000;frame-size-milliseconds=4 Text format text/plain;
    charset=utf-8"""

    output_type: Optional[str] = Field(default=UNSET, alias="outputType")
    """The output type of the utterance. The possible values are as follows: audio/mpeg audio/ogg audio/pcm (16 KHz)
    audio/ (defaults to mpeg) text/plain; charset=utf-8"""

    associated_intent_name: Optional[str] = Field(default=UNSET, alias="associatedIntentName")
    """The name of the intent that the utterance is associated to."""

    associated_slot_name: Optional[str] = Field(default=UNSET, alias="associatedSlotName")
    """The name of the slot that the utterance is associated to."""

    intent_state: Optional[IntentStateOrStr] = Field(default=UNSET, alias="intentState")
    """The state of the intent that the utterance is associated to."""

    dialog_action_type: Optional[str] = Field(default=UNSET, alias="dialogActionType")
    """The type of dialog action that the utterance is associated to. See the type field in DialogAction for more
    information."""

    bot_response_audio_voice_id: Optional[str] = Field(default=UNSET, alias="botResponseAudioVoiceId")
    """The identifier for the audio of the bot response."""

    slots_filled_in_session: Optional[str] = Field(default=UNSET, alias="slotsFilledInSession")
    """The slots that have been filled in the session by the time of the utterance."""

    utterance_request_id: Optional[str] = Field(default=UNSET, alias="utteranceRequestId")
    """The identifier of the request associated with the utterance."""

    bot_responses: Optional[list[UtteranceBotResponse]] = Field(default=UNSET, alias="botResponses")
    """A list of objects containing information about the bot response to the utterance."""


class UtteranceSpecificationDict(TypedDict):
    bot_alias_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    session_id: NotRequired[str]
    channel: NotRequired[str]
    mode: NotRequired[Mode1OrStr]
    conversation_start_time: NotRequired[RFC3339DateTime]
    conversation_end_time: NotRequired[RFC3339DateTime]
    utterance: NotRequired[str]
    utterance_timestamp: NotRequired[RFC3339DateTime]
    audio_voice_duration_millis: NotRequired[int]
    utterance_understood: NotRequired[bool]
    input_type: NotRequired[str]
    output_type: NotRequired[str]
    associated_intent_name: NotRequired[str]
    associated_slot_name: NotRequired[str]
    intent_state: NotRequired[IntentStateOrStr]
    dialog_action_type: NotRequired[str]
    bot_response_audio_voice_id: NotRequired[str]
    slots_filled_in_session: NotRequired[str]
    utterance_request_id: NotRequired[str]
    bot_responses: NotRequired[list[UtteranceBotResponseDict]]
