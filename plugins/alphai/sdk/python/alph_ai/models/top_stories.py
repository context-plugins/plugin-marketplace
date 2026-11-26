from __future__ import annotations

from typing_extensions import TypedDict

from ..core import RFC3339DateTime, SdkBaseModel
from .story_card import StoryCard, StoryCardDict


class TopStories(SdkBaseModel):
    results: list[StoryCard]
    as_of: RFC3339DateTime
    """When the list was ranked."""

    ranking_version: int
    """The ranking formula's version; a change to the formula increments it."""


class TopStoriesDict(TypedDict):
    results: list[StoryCardDict]
    as_of: RFC3339DateTime
    ranking_version: int
