from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .update_story_contents import UpdateStoryContents, UpdateStoryContentsDict


class UpdateEntityTemplate(SdkBaseModel):
    """Request parameters for changing either a template's name or any of
      the attributes it is designed to pre-populate."""

    model_config = ConfigDict(extra="forbid")

    name: Optional[str] = UNSET
    """The updated template name."""

    story_contents: Optional[UpdateStoryContents] = UNSET
    """Updated attributes for the template to populate."""


class UpdateEntityTemplateDict(TypedDict):
    name: NotRequired[str]
    story_contents: NotRequired[UpdateStoryContentsDict]
