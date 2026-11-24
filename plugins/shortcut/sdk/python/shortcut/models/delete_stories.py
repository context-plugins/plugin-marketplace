from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteStories(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    story_ids: list[int]
    """An array of IDs of Stories to delete."""


class DeleteStoriesDict(TypedDict):
    story_ids: list[int]
