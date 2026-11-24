from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .episode_in_podcast import EpisodeInPodcast, EpisodeInPodcastDict
from .podcast_full import PodcastFull, PodcastFullDict


class PodcastDetail(SdkBaseModel):
    podcast: PodcastFull
    recent_episodes: list[EpisodeInPodcast]


class PodcastDetailDict(TypedDict):
    podcast: PodcastFullDict
    recent_episodes: list[EpisodeInPodcastDict]
