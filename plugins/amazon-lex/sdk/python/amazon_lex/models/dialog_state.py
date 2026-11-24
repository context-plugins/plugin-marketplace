from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dialog_action import DialogAction, DialogActionDict
from .intent_override import IntentOverride, IntentOverrideDict


class DialogState(SdkBaseModel):
    dialog_action: Optional[DialogAction] = Field(default=UNSET, alias="dialogAction")
    intent: Optional[IntentOverride] = UNSET
    session_attributes: Optional[dict[str, str]] = Field(default=UNSET, alias="sessionAttributes")
    """Map of key/value pairs representing session-specific context information. It contains application information
    passed between Amazon Lex and a client application."""


class DialogStateDict(TypedDict):
    dialog_action: NotRequired[DialogActionDict]
    intent: NotRequired[IntentOverrideDict]
    session_attributes: NotRequired[dict[str, str]]
