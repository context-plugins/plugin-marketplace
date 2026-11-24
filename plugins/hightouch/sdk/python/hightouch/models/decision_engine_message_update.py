from __future__ import annotations

from typing import Any

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .decision_engine_message_guardrails import DecisionEngineMessageGuardrails, DecisionEngineMessageGuardrailsDict
from .decision_engine_variable import DecisionEngineVariable, DecisionEngineVariableDict


class DecisionEngineMessageUpdate(SdkBaseModel):
    """Request body for updating a Decision Engine message"""

    model_config = ConfigDict(extra="forbid")

    name: Optional[str] = UNSET
    config: Optional[dict[str, Any]] = UNSET
    tags: Optional[dict[str, Any]] = UNSET
    guardrails: Optional[DecisionEngineMessageGuardrails] = UNSET
    """Guardrail fields on a message (max sends, eligibility dates, etc.)"""

    variables: Optional[list[DecisionEngineVariable]] = UNSET


class DecisionEngineMessageUpdateDict(TypedDict):
    name: NotRequired[str]
    config: NotRequired[dict[str, Any]]
    tags: NotRequired[dict[str, Any]]
    guardrails: NotRequired[DecisionEngineMessageGuardrailsDict]
    variables: NotRequired[list[DecisionEngineVariableDict]]
