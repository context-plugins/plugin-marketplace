from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class EpisodeSummary(SdkBaseModel):
    duration_seconds: OptionalNullable[int] = UNSET
    has_transcript: bool
    id: int
    podcast_title: OptionalNullable[str] = UNSET
    publish_date: str
    slug: str
    title: str


class EpisodeSummaryDict(TypedDict):
    duration_seconds: NotRequired[int | None]
    has_transcript: bool
    id: int
    podcast_title: NotRequired[str | None]
    publish_date: str
    slug: str
    title: str
