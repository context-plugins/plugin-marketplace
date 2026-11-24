from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .execution_error_details import ExecutionErrorDetails, ExecutionErrorDetailsDict


class AgentTurnResult(SdkBaseModel):
    expected_agent_prompt: str = Field(alias="expectedAgentPrompt")
    """The expected agent prompt for the agent turn in a test set execution."""

    actual_agent_prompt: Optional[str] = Field(default=UNSET, alias="actualAgentPrompt")
    """The actual agent prompt for the agent turn in a test set execution."""

    error_details: Optional[ExecutionErrorDetails] = Field(default=UNSET, alias="errorDetails")
    actual_elicited_slot: Optional[str] = Field(default=UNSET, alias="actualElicitedSlot")
    """The actual elicited slot for the agent turn in a test set execution."""

    actual_intent: Optional[str] = Field(default=UNSET, alias="actualIntent")
    """The actual intent for the agent turn in a test set execution."""


class AgentTurnResultDict(TypedDict):
    expected_agent_prompt: str
    actual_agent_prompt: NotRequired[str]
    error_details: NotRequired[ExecutionErrorDetailsDict]
    actual_elicited_slot: NotRequired[str]
    actual_intent: NotRequired[str]
