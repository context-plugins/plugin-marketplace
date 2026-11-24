from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Episode(SdkBaseModel):
    id: str
    publish_date: str
    slug: str
    title: str


class EpisodeDict(TypedDict):
    id: str
    publish_date: str
    slug: str
    title: str
