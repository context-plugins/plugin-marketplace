from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .workflow_state import WorkflowState, WorkflowStateDict


class Workflow(SdkBaseModel):
    """Workflow is the array of defined Workflow States. Workflow can be queried using the API but must be updated in
    the Shortcut UI."""

    model_config = ConfigDict(extra="forbid")

    description: str
    """A description of the workflow."""

    entity_type: str
    """A string description of this resource."""

    project_ids: list[float]
    """An array of IDs of projects within the Workflow."""

    states: list[WorkflowState]
    """A map of the states in this Workflow."""

    name: str
    """The name of the workflow."""

    updated_at: RFC3339DateTime
    """The date the Workflow was updated."""

    auto_assign_owner: bool
    """Indicates if an owner is automatically assigned when an unowned story is started."""

    id: int
    """The unique ID of the Workflow."""

    team_id: int
    """The ID of the team the workflow belongs to."""

    created_at: RFC3339DateTime
    """The date the Workflow was created."""

    default_state_id: int
    """The unique ID of the default state that new Stories are entered into."""


class WorkflowDict(TypedDict):
    description: str
    entity_type: str
    project_ids: list[float]
    states: list[WorkflowStateDict]
    name: str
    updated_at: RFC3339DateTime
    auto_assign_owner: bool
    id: int
    team_id: int
    created_at: RFC3339DateTime
    default_state_id: int
