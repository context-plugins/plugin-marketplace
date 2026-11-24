from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class EntityEpisodeMention(SdkBaseModel):
    episode_id: int
    episode_title: str
    mention_count: int
    podcast_title: str


class EntityEpisodeMentionDict(TypedDict):
    episode_id: int
    episode_title: str
    mention_count: int
    podcast_title: str
