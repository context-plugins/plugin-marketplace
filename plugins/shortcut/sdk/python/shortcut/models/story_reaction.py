from __future__ import annotations

from uuid import UUID

from pydantic import ConfigDict
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StoryReaction(SdkBaseModel):
    """Emoji reaction on a comment."""

    model_config = ConfigDict(extra="forbid")

    emoji: str
    """Emoji text of the reaction."""

    permission_ids: list[UUID]
    """Permissions who have reacted with this."""


class StoryReactionDict(TypedDict):
    emoji: str
    permission_ids: list[UUID]
