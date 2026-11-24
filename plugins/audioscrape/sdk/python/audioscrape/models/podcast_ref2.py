from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class PodcastRef2(SdkBaseModel):
    """Present for podcast episodes; ``null`` for uploaded items (which have no parent podcast)."""

    id: int
    image_url: OptionalNullable[str] = UNSET
    slug: str
    title: str


class PodcastRef2Dict(TypedDict):
    id: int
    image_url: NotRequired[str | None]
    slug: str
    title: str
