from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .runtime_lex_active_context import RuntimeLexActiveContext, RuntimeLexActiveContextDict
from .runtime_lex_dialog_action import RuntimeLexDialogAction, RuntimeLexDialogActionDict
from .runtime_lex_intent_summary import RuntimeLexIntentSummary, RuntimeLexIntentSummaryDict


class RuntimeLexPutSessionRequest(SdkBaseModel):
    bot_name: str = Field(alias="botName")
    """The name of the bot that contains the session data."""

    bot_alias: str = Field(alias="botAlias")
    """The alias in use for the bot that contains the session data."""

    user_id: str = Field(alias="userId")
    """The ID of the client application user. Amazon Lex uses this to identify a user's conversation with your bot."""

    session_attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="sessionAttributes")
    """Map of key/value pairs representing the session-specific context information. It contains application information
    passed between Amazon Lex and a client application."""

    dialog_action: Optional[RuntimeLexDialogAction] = Field(default=UNSET, alias="dialogAction")
    recent_intent_summary_view: Optional[list[RuntimeLexIntentSummary]] = Field(
        default=UNSET, alias="recentIntentSummaryView"
    )
    """A summary of the recent intents for the bot. You can use the intent summary view to set a checkpoint label on an
    intent and modify attributes of intents. You can also use it to remove or add intent summary objects to the list. An
    intent that you modify or add to the list must make sense for the bot. For example, the intent name must be valid
    for the bot. You must provide valid values for: intentName slot names slotToElict If you send the
    recentIntentSummaryView parameter in a PutSession request, the contents of the new summary view replaces the old
    summary view. For example, if a GetSession re"""

    accept: Optional[str] = UNSET
    """The message that Amazon Lex returns in the response can be either text or speech based depending on the value of
    this field. If the value is text/plain; charset=utf-8, Amazon Lex returns text in the response. If the value begins
    with audio/, Amazon Lex returns speech in the response. Amazon Lex uses Amazon Polly to generate the speech in the
    configuration that you specify. For example, if you specify audio/mpeg as the value, Amazon Lex returns speech in
    the MPEG format. If the value is audio/pcm, the speech is returned as audio/pcm in 16-bit, little endian format. The
    following are the accepte"""

    active_contexts: Optional[list[RuntimeLexActiveContext]] = Field(default=UNSET, alias="activeContexts")
    """A list of contexts active for the request. A context can be activated when a previous intent is fulfilled, or by
    including the context in the request, If you don't specify a list of contexts, Amazon Lex will use the current list
    of contexts for the session. If you specify an empty list, all contexts for the session are cleared."""


class RuntimeLexPutSessionRequestDict(TypedDict):
    bot_name: str
    bot_alias: str
    user_id: str
    session_attributes: NotRequired[dict[str, str]]
    dialog_action: NotRequired[RuntimeLexDialogActionDict]
    recent_intent_summary_view: NotRequired[list[RuntimeLexIntentSummaryDict]]
    accept: NotRequired[str]
    active_contexts: NotRequired[list[RuntimeLexActiveContextDict]]
