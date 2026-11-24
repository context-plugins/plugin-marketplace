from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .active_context import ActiveContext, ActiveContextDict
from .user_turn_intent_output import UserTurnIntentOutput, UserTurnIntentOutputDict


class UserTurnOutputSpecification(SdkBaseModel):
    intent: UserTurnIntentOutput
    active_contexts: Optional[list[ActiveContext]] = Field(default=UNSET, alias="activeContexts")
    """The contexts that are active in the turn."""

    transcript: Optional[str] = UNSET
    """The transcript that is output for the user turn by the test execution."""


class UserTurnOutputSpecificationDict(TypedDict):
    intent: UserTurnIntentOutputDict
    active_contexts: NotRequired[list[ActiveContextDict]]
    transcript: NotRequired[str]
