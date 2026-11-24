from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .runtime_lex_active_context import RuntimeLexActiveContext, RuntimeLexActiveContextDict


class PostTextRequest(SdkBaseModel):
    bot_name: str = Field(alias="botName")
    """The name of the Amazon Lex bot."""

    bot_alias: str = Field(alias="botAlias")
    """The alias of the Amazon Lex bot."""

    user_id: str = Field(alias="userId")
    """The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot. At
    runtime, each request must contain the userID field. To decide the user ID to use for your application, consider the
    following factors. The userID field must not contain any personally identifiable information of the user, for
    example, name, personal identification numbers, or other end user personal information. If you want a user to start
    a conversation on one device and continue on another device, use a user-specific identifier. If you want the same
    user to be able to have two ind"""

    session_attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="sessionAttributes")
    """Application-specific information passed between Amazon Lex and a client application. For more information, see
    Setting Session Attributes."""

    request_attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="requestAttributes")
    """Request-specific information passed between Amazon Lex and a client application. The namespace x-amz-lex: is
    reserved for special attributes. Don't create any request attributes with the prefix x-amz-lex:. For more
    information, see Setting Request Attributes."""

    input_text: str = Field(alias="inputText")
    """The text that the user entered (Amazon Lex interprets this text)."""

    active_contexts: Optional[list[RuntimeLexActiveContext]] = Field(default=UNSET, alias="activeContexts")
    """A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by
    including the context in the request, If you don't specify a list of contexts, Amazon Lex will use the current list
    of contexts for the session. If you specify an empty list, all contexts for the session are cleared."""


class PostTextRequestDict(TypedDict):
    bot_name: str
    bot_alias: str
    user_id: str
    session_attributes: NotRequired[dict[str, str]]
    request_attributes: NotRequired[dict[str, str]]
    input_text: str
    active_contexts: NotRequired[list[RuntimeLexActiveContextDict]]
