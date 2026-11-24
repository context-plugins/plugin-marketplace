from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class PodcastSummary(SdkBaseModel):
    episode_count: int
    id: int
    image_url: OptionalNullable[str] = UNSET
    language: OptionalNullable[str] = UNSET
    slug: str
    title: str


class PodcastSummaryDict(TypedDict):
    episode_count: int
    id: int
    image_url: NotRequired[str | None]
    language: NotRequired[str | None]
    slug: str
    title: str
