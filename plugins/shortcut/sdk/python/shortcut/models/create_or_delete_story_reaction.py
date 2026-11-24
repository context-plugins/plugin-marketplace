from __future__ import annotations

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class CreateOrDeleteStoryReaction(SdkBaseModel):
    model_config = ConfigDict(extra="forbid")

    emoji: str
    """The emoji short-code to add / remove. E.g. ``:thumbsup::skin-tone-4:``."""


class CreateOrDeleteStoryReactionDict(TypedDict):
    emoji: str
