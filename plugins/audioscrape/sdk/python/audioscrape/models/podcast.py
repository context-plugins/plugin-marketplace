from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Podcast(SdkBaseModel):
    id: str
    image_url: str
    slug: str
    title: str


class PodcastDict(TypedDict):
    id: str
    image_url: str
    slug: str
    title: str
