from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ItemPodcastRef2(SdkBaseModel):
    """Reference to the podcast this item is part of, if applicable."""

    id: int
    slug: str
    title: str


class ItemPodcastRef2Dict(TypedDict):
    id: int
    slug: str
    title: str
