from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class DatasetSummary(SdkBaseModel):
    description: OptionalNullable[str] = UNSET
    episode_count: int
    id: int
    name: str
    podcast_count: int
    slug: str
    visibility: str
    """``public``, ``workspace``, or ``private``."""


class DatasetSummaryDict(TypedDict):
    description: NotRequired[str | None]
    episode_count: int
    id: int
    name: str
    podcast_count: int
    slug: str
    visibility: str
