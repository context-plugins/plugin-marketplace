from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class PodcastRef(SdkBaseModel):
    id: int
    image_url: OptionalNullable[str] = UNSET
    slug: str
    title: str


class PodcastRefDict(TypedDict):
    id: int
    image_url: NotRequired[str | None]
    slug: str
    title: str
