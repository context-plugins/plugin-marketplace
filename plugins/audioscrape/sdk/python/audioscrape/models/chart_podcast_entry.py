from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class ChartPodcastEntry(SdkBaseModel):
    country_code: str
    date_checked: str
    image_url: OptionalNullable[str] = UNSET
    platform: OptionalNullable[str] = UNSET
    podcast_id: int
    rank: OptionalNullable[int] = UNSET
    slug: str
    title: str


class ChartPodcastEntryDict(TypedDict):
    country_code: str
    date_checked: str
    image_url: NotRequired[str | None]
    platform: NotRequired[str | None]
    podcast_id: int
    rank: NotRequired[int | None]
    slug: str
    title: str
