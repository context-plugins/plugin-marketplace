from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .session_state import SessionState, SessionStateDict


class RecognizeTextRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier of the bot that processes the request."""

    bot_alias_id: str = Field(alias="botAliasId")
    """The alias identifier in use for the bot that processes the request."""

    locale_id: str = Field(alias="localeId")
    """The locale where the session is in use."""

    session_id: str = Field(alias="sessionId")
    """The identifier of the user session that is having the conversation."""

    text: str
    """The text that the user entered. Amazon Lex V2 interprets this text."""

    session_state: Optional[SessionState] = Field(default=UNSET, alias="sessionState")
    request_attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="requestAttributes")
    """Request-specific information passed between the client application and Amazon Lex V2 The namespace x-amz-lex: is
    reserved for special attributes. Don't create any request attributes with the prefix x-amz-lex:."""


class RecognizeTextRequestDict(TypedDict):
    bot_id: str
    bot_alias_id: str
    locale_id: str
    session_id: str
    text: str
    session_state: NotRequired[SessionStateDict]
    request_attributes: NotRequired[dict[str, str]]
