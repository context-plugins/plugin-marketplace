from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.conversation_mode import ConversationModeOrStr
from .start_conversation_request_event_stream import (
    StartConversationRequestEventStream,
    StartConversationRequestEventStreamDict,
)


class StartConversationRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot to process the request."""

    bot_alias_id: str = Field(alias="botAliasId")
    """The alias identifier in use for the bot that processes the request."""

    locale_id: str = Field(alias="localeId")
    """The locale where the session is in use."""

    session_id: str = Field(alias="sessionId")
    """The identifier of the user session that is having the conversation."""

    conversation_mode: Optional[ConversationModeOrStr] = Field(default=UNSET, alias="conversationMode")
    """The conversation type that you are using the Amazon Lex V2. If the conversation mode is AUDIO you can send both
    audio and DTMF information. If the mode is TEXT you can only send text."""

    request_event_stream: StartConversationRequestEventStream = Field(alias="requestEventStream")
    """Exactly one member is set."""


class StartConversationRequestDict(TypedDict):
    bot_id: str
    bot_alias_id: str
    locale_id: str
    session_id: str
    conversation_mode: NotRequired[ConversationModeOrStr]
    request_event_stream: StartConversationRequestEventStreamDict
