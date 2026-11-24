from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .create_story_params import CreateStoryParams, CreateStoryParamsDict


class CreateStories(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    stories: list[CreateStoryParams]
    """An array of stories to be created."""


class CreateStoriesDict(TypedDict):
    stories: list[CreateStoryParamsDict]
