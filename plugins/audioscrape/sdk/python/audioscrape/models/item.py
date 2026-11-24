from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .item_podcast_ref2 import ItemPodcastRef2, ItemPodcastRef2Dict


class Item(SdkBaseModel):
    dataset_id: OptionalNullable[int] = UNSET
    duration_seconds: OptionalNullable[int] = UNSET
    has_transcript: bool
    id: int
    podcast: OptionalNullable[ItemPodcastRef2] = UNSET
    publish_date: OptionalNullable[str] = UNSET
    slug: str
    source_type: str
    """``podcast_episode``, ``upload``, ``youtube``, etc."""

    title: str


class ItemDict(TypedDict):
    dataset_id: NotRequired[int | None]
    duration_seconds: NotRequired[int | None]
    has_transcript: bool
    id: int
    podcast: NotRequired[ItemPodcastRef2Dict | None]
    publish_date: NotRequired[str | None]
    slug: str
    source_type: str
    title: str
