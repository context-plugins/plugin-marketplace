from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class WorkflowState(SdkBaseModel):
    """Workflow State is any of the at least 3 columns. Workflow States correspond to one of 3 types: Unstarted,
    Started, or Done."""

    model_config = ConfigDict(extra="forbid")

    description: str
    """The description of what sort of Stories belong in that Workflow state."""

    entity_type: str
    """A string description of this resource."""

    color: Optional[str] = UNSET
    """The hex color for this Workflow State."""

    verb: str | None
    """The verb that triggers a move to that Workflow State when making VCS commits."""

    name: str
    """The Workflow State's name."""

    global_id: str
    num_stories: int
    """The number of Stories currently in that Workflow State."""

    type_: str = Field(alias="type")
    """The type of Workflow State (Unstarted, Started, or Finished)"""

    updated_at: RFC3339DateTime
    """When the Workflow State was last updated."""

    id: int
    """The unique ID of the Workflow State."""

    num_story_templates: int
    """The number of Story Templates associated with that Workflow State."""

    position: int
    """The position that the Workflow State is in, starting with 0 at the left."""

    created_at: RFC3339DateTime
    """The time/date the Workflow State was created."""


class WorkflowStateDict(TypedDict):
    description: str
    entity_type: str
    color: NotRequired[str]
    verb: str | None
    name: str
    global_id: str
    num_stories: int
    type_: str
    updated_at: RFC3339DateTime
    id: int
    num_story_templates: int
    position: int
    created_at: RFC3339DateTime
