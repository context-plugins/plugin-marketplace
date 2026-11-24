from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .epic_state import EpicState, EpicStateDict


class EpicWorkflow(SdkBaseModel):
    """Epic Workflow is the array of defined Epic States. Epic Workflow can be queried using the API but must be updated
    in the Shortcut UI."""

    model_config = ConfigDict(extra="forbid")

    entity_type: str
    """A string description of this resource."""

    id: int
    """The unique ID of the Epic Workflow."""

    created_at: RFC3339DateTime
    """The date the Epic Workflow was created."""

    updated_at: RFC3339DateTime
    """The date the Epic Workflow was updated."""

    default_epic_state_id: int
    """The unique ID of the default Epic State that new Epics are assigned by default."""

    epic_states: list[EpicState]
    """A map of the Epic States in this Epic Workflow."""


class EpicWorkflowDict(TypedDict):
    entity_type: str
    id: int
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    default_epic_state_id: int
    epic_states: list[EpicStateDict]
