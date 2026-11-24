from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TrendingEntity(SdkBaseModel):
    entity_type: str
    name: str
    recent_mentions: int
    slug: str


class TrendingEntityDict(TypedDict):
    entity_type: str
    name: str
    recent_mentions: int
    slug: str
