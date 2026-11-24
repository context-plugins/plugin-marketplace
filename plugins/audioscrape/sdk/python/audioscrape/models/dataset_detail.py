from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class DatasetDetail(SdkBaseModel):
    description: OptionalNullable[str] = UNSET
    episode_count: int
    id: int
    library_name: str
    library_slug: str
    name: str
    podcast_count: int
    slug: str
    visibility: str


class DatasetDetailDict(TypedDict):
    description: NotRequired[str | None]
    episode_count: int
    id: int
    library_name: str
    library_slug: str
    name: str
    podcast_count: int
    slug: str
    visibility: str
