from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .story_contents import StoryContents, StoryContentsDict


class EntityTemplate(SdkBaseModel):
    """An entity template can be used to prefill various fields when creating new stories."""

    model_config = ConfigDict(extra="forbid")

    entity_type: str
    """A string description of this resource."""

    id: UUID
    """The unique identifier for the entity template."""

    created_at: RFC3339DateTime
    """The time/date when the entity template was created."""

    updated_at: RFC3339DateTime
    """The time/date when the entity template was last updated."""

    name: str
    """The template's name."""

    author_id: UUID
    """The unique ID of the member who created the template."""

    last_used_at: RFC3339DateTime
    """The last time that someone created an entity using this template."""

    story_contents: StoryContents
    """A container entity for the attributes this template should populate."""


class EntityTemplateDict(TypedDict):
    entity_type: str
    id: UUID
    created_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    name: str
    author_id: UUID
    last_used_at: RFC3339DateTime
    story_contents: StoryContentsDict
