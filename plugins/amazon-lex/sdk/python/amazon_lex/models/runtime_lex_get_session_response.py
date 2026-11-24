from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .runtime_lex_active_context import RuntimeLexActiveContext, RuntimeLexActiveContextDict
from .runtime_lex_dialog_action import RuntimeLexDialogAction, RuntimeLexDialogActionDict
from .runtime_lex_intent_summary import RuntimeLexIntentSummary, RuntimeLexIntentSummaryDict


class RuntimeLexGetSessionResponse(SdkBaseModel):
    recent_intent_summary_view: Optional[list[RuntimeLexIntentSummary]] = Field(
        default=UNSET, alias="recentIntentSummaryView"
    )
    """An array of information about the intents used in the session. The array can contain a maximum of three
    summaries. If more than three intents are used in the session, the recentIntentSummaryView operation contains
    information about the last three intents used. If you set the checkpointLabelFilter parameter in the request, the
    array contains only the intents with the specified label."""

    session_attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="sessionAttributes")
    """Map of key/value pairs representing the session-specific context information. It contains application information
    passed between Amazon Lex and a client application."""

    session_id: Optional[str] = Field(default=UNSET, alias="sessionId")
    """A unique identifier for the session."""

    dialog_action: Optional[RuntimeLexDialogAction] = Field(default=UNSET, alias="dialogAction")
    active_contexts: Optional[list[RuntimeLexActiveContext]] = Field(default=UNSET, alias="activeContexts")
    """A list of active contexts for the session. A context can be set when an intent is fulfilled or by calling the
    PostContent, PostText, or PutSession operation. You can use a context to control the intents that can follow up an
    intent, or to modify the operation of your application."""


class RuntimeLexGetSessionResponseDict(TypedDict):
    recent_intent_summary_view: NotRequired[list[RuntimeLexIntentSummaryDict]]
    session_attributes: NotRequired[dict[str, str]]
    session_id: NotRequired[str]
    dialog_action: NotRequired[RuntimeLexDialogActionDict]
    active_contexts: NotRequired[list[RuntimeLexActiveContextDict]]
