from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PlayRankingItem(SdkBaseModel):
    date: str
    app: str
    country: str
    category: str
    collection: str
    rank: int


class PlayRankingItemDict(TypedDict):
    date: str
    app: str
    country: str
    category: str
    collection: str
    rank: int
