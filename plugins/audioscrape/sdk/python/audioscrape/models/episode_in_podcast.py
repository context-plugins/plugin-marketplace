from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class EpisodeInPodcast(SdkBaseModel):
    duration_seconds: OptionalNullable[int] = UNSET
    has_transcript: bool
    id: int
    publish_date: str
    slug: str
    title: str


class EpisodeInPodcastDict(TypedDict):
    duration_seconds: NotRequired[int | None]
    has_transcript: bool
    id: int
    publish_date: str
    slug: str
    title: str
