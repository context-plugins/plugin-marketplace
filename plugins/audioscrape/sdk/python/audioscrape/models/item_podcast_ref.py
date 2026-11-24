from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ItemPodcastRef(SdkBaseModel):
    id: int
    slug: str
    title: str


class ItemPodcastRefDict(TypedDict):
    id: int
    slug: str
    title: str
