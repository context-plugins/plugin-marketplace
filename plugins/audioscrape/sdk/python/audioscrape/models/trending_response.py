from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .trending_entity import TrendingEntity, TrendingEntityDict
from .trending_search import TrendingSearch, TrendingSearchDict


class TrendingResponse(SdkBaseModel):
    trending_entities: list[TrendingEntity]
    trending_searches: list[TrendingSearch]


class TrendingResponseDict(TypedDict):
    trending_entities: list[TrendingEntityDict]
    trending_searches: list[TrendingSearchDict]
