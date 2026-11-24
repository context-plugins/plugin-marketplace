from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.conversation_end_state import ConversationEndStateOrStr
from .enums.mode import ModeOrStr
from .invoked_intent_sample import InvokedIntentSample, InvokedIntentSampleDict


class SessionSpecification(SdkBaseModel):
    bot_alias_id: Optional[str] = Field(default=UNSET, alias="botAliasId")
    """The identifier of the alias of the bot that the session was held with."""

    bot_version: Optional[str] = Field(default=UNSET, alias="botVersion")
    """The version of the bot that the session was held with."""

    locale_id: Optional[str] = Field(default=UNSET, alias="localeId")
    """The locale of the bot that the session was held with."""

    channel: Optional[str] = UNSET
    """The channel that is integrated with the bot that the session was held with."""

    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """The identifier of the session."""

    conversation_start_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="conversationStartTime")
    """The date and time when the conversation began. A conversation is defined as a unique combination of a sessionId
    and an originatingRequestId."""

    conversation_end_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="conversationEndTime")
    """The date and time when the conversation ended. A conversation is defined as a unique combination of a sessionId
    and an originatingRequestId."""

    conversation_duration_seconds: Optional[int] = Field(default=UNSET, alias="conversationDurationSeconds")
    """The duration of the conversation in seconds. A conversation is defined as a unique combination of a sessionId and
    an originatingRequestId."""

    conversation_end_state: Optional[ConversationEndStateOrStr] = Field(default=UNSET, alias="conversationEndState")
    """The final state of the conversation. A conversation is defined as a unique combination of a sessionId and an
    originatingRequestId."""

    mode: Optional[ModeOrStr] = UNSET
    """The mode of the session. The possible values are as follows: Speech – The session was spoken. Text – The session
    was written. DTMF – The session used a touch-tone keypad (Dual Tone Multi-Frequency). MultiMode – The session used
    multiple modes."""

    number_of_turns: Optional[int] = Field(default=UNSET, alias="numberOfTurns")
    """The number of turns that the session took."""

    invoked_intent_samples: Optional[list[InvokedIntentSample]] = Field(default=UNSET, alias="invokedIntentSamples")
    """A list of objects containing the name of an intent that was invoked."""

    originating_request_id: Optional[str] = Field(default=UNSET, alias="originatingRequestId")
    """The identifier of the first request in a session."""


class SessionSpecificationDict(TypedDict):
    bot_alias_id: NotRequired[str]
    bot_version: NotRequired[str]
    locale_id: NotRequired[str]
    channel: NotRequired[str]
    session_id: NotRequired[str]
    conversation_start_time: NotRequired[RFC3339DateTime]
    conversation_end_time: NotRequired[RFC3339DateTime]
    conversation_duration_seconds: NotRequired[int]
    conversation_end_state: NotRequired[ConversationEndStateOrStr]
    mode: NotRequired[ModeOrStr]
    number_of_turns: NotRequired[int]
    invoked_intent_samples: NotRequired[list[InvokedIntentSampleDict]]
    originating_request_id: NotRequired[str]
