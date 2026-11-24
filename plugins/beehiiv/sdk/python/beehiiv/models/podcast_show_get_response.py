from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .podcast_show import PodcastShow, PodcastShowDict


class PodcastShowGetResponse(SdkBaseModel):
    data: PodcastShow


class PodcastShowGetResponseDict(TypedDict):
    data: PodcastShowDict
