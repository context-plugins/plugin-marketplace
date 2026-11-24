from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class StoryLink(SdkBaseModel):
    """Story links allow you create semantic relationships between two stories. Relationship types are relates to,
    blocks / blocked by, and duplicates / is duplicated by. The format is ``subject -> link -> object``, or for example
    "story 5 blocks story 6"."""

    model_config = ConfigDict(extra="forbid")

    entity_type: str
    """A string description of this resource."""

    id: int
    """The unique identifier of the Story Link."""

    subject_id: int
    """The ID of the subject Story."""

    subject_workflow_state_id: int
    """The workflow state of the "subject" story."""

    verb: str
    """How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to"."""

    object_id: int
    """The ID of the object Story."""

    created_at: RFC3339DateTime
    """The time/date when the Story Link was created."""

    updated_at: RFC3339DateTime
    """The time/date when the Story Link was last updated."""


class StoryLinkDict(TypedDict):
    entity_type: str
    id: int
    subject_id: int
    subject_workflow_state_id: int
    verb: str
    object_id: int
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
