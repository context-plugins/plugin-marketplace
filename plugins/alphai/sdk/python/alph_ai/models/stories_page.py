from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .story_card import StoryCard, StoryCardDict


class StoriesPage(SdkBaseModel):
    results: list[StoryCard]
    next_cursor: str | None
    """Opaque cursor for the next (older) page; ``null`` at the end."""


class StoriesPageDict(TypedDict):
    results: list[StoryCardDict]
    next_cursor: str | None
