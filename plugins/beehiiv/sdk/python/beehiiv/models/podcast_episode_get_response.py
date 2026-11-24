from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .podcast_episode import PodcastEpisode, PodcastEpisodeDict


class PodcastEpisodeGetResponse(SdkBaseModel):
    data: PodcastEpisode


class PodcastEpisodeGetResponseDict(TypedDict):
    data: PodcastEpisodeDict
