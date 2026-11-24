from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .create_story_contents import CreateStoryContents, CreateStoryContentsDict


class CreateEntityTemplate(SdkBaseModel):
    """Request parameters for creating an entirely new entity template."""

    model_config = ConfigDict(extra="forbid")

    name: str
    """The name of the new entity template"""

    author_id: Optional[UUID] = UNSET
    """The id of the user creating this template."""

    story_contents: CreateStoryContents
    """A map of story attributes this template populates."""


class CreateEntityTemplateDict(TypedDict):
    name: str
    author_id: NotRequired[UUID]
    story_contents: CreateStoryContentsDict
