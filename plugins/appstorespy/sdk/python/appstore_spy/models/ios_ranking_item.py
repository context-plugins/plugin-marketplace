from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class IosRankingItem(SdkBaseModel):
    date: str
    app: str
    platform: str
    country: str
    category: str
    collection: str
    rank: int


class IosRankingItemDict(TypedDict):
    date: str
    app: str
    platform: str
    country: str
    category: str
    collection: str
    rank: int
