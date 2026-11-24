from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .runtime_v2_lex_message import RuntimeV2LexMessage, RuntimeV2LexMessageDict
from .session_state import SessionState, SessionStateDict


class PutSessionRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot that receives the session data."""

    bot_alias_id: str = Field(alias="botAliasId")
    """The alias identifier of the bot that receives the session data."""

    locale_id: str = Field(alias="localeId")
    """The locale where the session is in use."""

    session_id: str = Field(alias="sessionId")
    """The identifier of the session that receives the session data."""

    messages: Optional[list[RuntimeV2LexMessage]] = UNSET
    """A list of messages to send to the user. Messages are sent in the order that they are defined in the list."""

    session_state: SessionState = Field(alias="sessionState")
    request_attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="requestAttributes")
    """Request-specific information passed between Amazon Lex V2 and the client application. The namespace x-amz-lex: is
    reserved for special attributes. Don't create any request attributes with the prefix x-amz-lex:."""

    response_content_type: Optional[str] = Field(default=UNSET, alias="responseContentType")
    """The message that Amazon Lex V2 returns in the response can be either text or speech depending on the value of
    this parameter. If the value is text/plain; charset=utf-8, Amazon Lex V2 returns text in the response."""


class PutSessionRequestDict(TypedDict):
    bot_id: str
    bot_alias_id: str
    locale_id: str
    session_id: str
    messages: NotRequired[list[RuntimeV2LexMessageDict]]
    session_state: SessionStateDict
    request_attributes: NotRequired[dict[str, str]]
    response_content_type: NotRequired[str]
