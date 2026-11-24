from __future__ import annotations

from pydantic import ConfigDict, Field
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel


class TypedStoryLink(SdkBaseModel):
    """The type of Story Link. The string can be subject or object."""

    model_config = ConfigDict(extra="forbid")

    entity_type: str
    """A string description of this resource."""

    object_id: int
    """The ID of the object Story."""

    verb: str
    """How the subject Story acts on the object Story. This can be "blocks", "duplicates", or "relates to"."""

    type_: str = Field(alias="type")
    """This indicates whether the Story is the subject or object in the Story Link."""

    updated_at: RFC3339DateTime
    """The time/date when the Story Link was last updated."""

    id: int
    """The unique identifier of the Story Link."""

    subject_id: int
    """The ID of the subject Story."""

    subject_workflow_state_id: int
    """The workflow state of the "subject" story."""

    created_at: RFC3339DateTime
    """The time/date when the Story Link was created."""


class TypedStoryLinkDict(TypedDict):
    entity_type: str
    object_id: int
    verb: str
    type_: str
    updated_at: RFC3339DateTime
    id: int
    subject_id: int
    subject_workflow_state_id: int
    created_at: RFC3339DateTime
