from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TrendingSearch(SdkBaseModel):
    query: str
    search_count: int


class TrendingSearchDict(TypedDict):
    query: str
    search_count: int
