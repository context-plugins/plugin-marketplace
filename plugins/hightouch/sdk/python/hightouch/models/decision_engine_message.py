from __future__ import annotations

from typing import Any

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .decision_engine_message_guardrails import DecisionEngineMessageGuardrails, DecisionEngineMessageGuardrailsDict
from .decision_engine_variable import DecisionEngineVariable, DecisionEngineVariableDict


class DecisionEngineMessage(SdkBaseModel):
    """Decision Engine Message (Public API)"""

    model_config = ConfigDict(extra="forbid")

    id: str
    name: str
    channel_id: str = Field(alias="channelId")
    config: dict[str, Any]
    tags: Optional[dict[str, Any]] = UNSET
    guardrails: Optional[DecisionEngineMessageGuardrails] = UNSET
    """Guardrail fields on a message (max sends, eligibility dates, etc.)"""

    variables: Optional[list[DecisionEngineVariable]] = UNSET
    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")
    updated_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="updatedAt")


class DecisionEngineMessageDict(TypedDict):
    id: str
    name: str
    channel_id: str
    config: dict[str, Any]
    tags: NotRequired[dict[str, Any]]
    guardrails: NotRequired[DecisionEngineMessageGuardrailsDict]
    variables: NotRequired[list[DecisionEngineVariableDict]]
    created_at: NotRequired[RFC3339DateTime]
    updated_at: NotRequired[RFC3339DateTime]
