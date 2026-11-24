from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.qa_agent_subject_type import QaAgentSubjectTypeOrStr
from .qa_agent_linked_taskset import QaAgentLinkedTaskset, QaAgentLinkedTasksetDict
from .qa_agent_output_property import QaAgentOutputProperty, QaAgentOutputPropertyDict
from .scenario_argument import ScenarioArgument, ScenarioArgumentDict


class QaAgentResponse(SdkBaseModel):
    """A QA agent; its model and argument config are returned only to the owning team."""

    id: UUID
    scenario_id: UUID
    model_id: Optional[UUID] = UNSET
    name: str
    description: Optional[str] = UNSET
    max_steps: int
    partial_args: Any
    public: bool = False
    subject_type: Optional[QaAgentSubjectTypeOrStr] = UNSET
    """Canonical resources a QA agent can analyze."""

    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    scenario_name: Optional[str] = UNSET
    scenario_description: Optional[str] = UNSET
    scenario_arguments: Optional[list[ScenarioArgument]] = UNSET
    environment_id: Optional[UUID] = UNSET
    environment_name: Optional[str] = UNSET
    model_name: Optional[str] = UNSET
    provider_icon_url: Optional[str] = UNSET
    sdk_agent_type: Optional[str] = UNSET
    output_properties: Optional[list[QaAgentOutputProperty]] = UNSET
    linked_tasksets: Optional[list[QaAgentLinkedTaskset]] = UNSET


class QaAgentResponseDict(TypedDict):
    id: UUID
    scenario_id: UUID
    model_id: NotRequired[UUID]
    name: str
    description: NotRequired[str]
    max_steps: int
    partial_args: Any
    public: NotRequired[bool]
    subject_type: NotRequired[QaAgentSubjectTypeOrStr]
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    scenario_name: NotRequired[str]
    scenario_description: NotRequired[str]
    scenario_arguments: NotRequired[list[ScenarioArgumentDict]]
    environment_id: NotRequired[UUID]
    environment_name: NotRequired[str]
    model_name: NotRequired[str]
    provider_icon_url: NotRequired[str]
    sdk_agent_type: NotRequired[str]
    output_properties: NotRequired[list[QaAgentOutputPropertyDict]]
    linked_tasksets: NotRequired[list[QaAgentLinkedTasksetDict]]
