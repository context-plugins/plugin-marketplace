from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class Library(SdkBaseModel):
    curator: OptionalNullable[str] = UNSET
    dataset_count: int
    description: OptionalNullable[str] = UNSET
    episode_count: int
    is_subscribed: bool
    """Whether the calling user is a member of this library."""

    name: str
    slug: str
    """Stable URL slug, e.g. ``audioscrape``."""

    subscriber_count: int


class LibraryDict(TypedDict):
    curator: NotRequired[str | None]
    dataset_count: int
    description: NotRequired[str | None]
    episode_count: int
    is_subscribed: bool
    name: str
    slug: str
    subscriber_count: int
