from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .intent import Intent, IntentDict
from .runtime_hints import RuntimeHints, RuntimeHintsDict
from .runtime_v2_lex_active_context import RuntimeV2LexActiveContext, RuntimeV2LexActiveContextDict
from .runtime_v2_lex_dialog_action import RuntimeV2LexDialogAction, RuntimeV2LexDialogActionDict


class SessionState(SdkBaseModel):
    dialog_action: Optional[RuntimeV2LexDialogAction] = Field(default=UNSET, alias="dialogAction")
    intent: Optional[Intent] = UNSET
    active_contexts: Optional[list[RuntimeV2LexActiveContext]] = Field(default=UNSET, alias="activeContexts")
    """One or more contexts that indicate to Amazon Lex V2 the context of a request. When a context is active, Amazon
    Lex V2 considers intents with the matching context as a trigger as the next intent in a session."""

    session_attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="sessionAttributes")
    """Map of key/value pairs representing session-specific context information. It contains application information
    passed between Amazon Lex V2 and a client application."""

    originating_request_id: Optional[str] = Field(default=UNSET, alias="originatingRequestId")
    """A unique identifier for a specific request."""

    runtime_hints: Optional[RuntimeHints] = Field(default=UNSET, alias="runtimeHints")


class SessionStateDict(TypedDict):
    dialog_action: NotRequired[RuntimeV2LexDialogActionDict]
    intent: NotRequired[IntentDict]
    active_contexts: NotRequired[list[RuntimeV2LexActiveContextDict]]
    session_attributes: NotRequired[dict[str, str]]
    originating_request_id: NotRequired[str]
    runtime_hints: NotRequired[RuntimeHintsDict]
