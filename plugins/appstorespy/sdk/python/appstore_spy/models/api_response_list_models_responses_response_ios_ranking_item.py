from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detailed_error import DetailedError, DetailedErrorDict
from .ios_ranking_item import IosRankingItem, IosRankingItemDict


class ApiResponseListModelsResponsesResponseIosRankingItem(SdkBaseModel):
    data: Optional[list[IosRankingItem]] = UNSET
    errors: Optional[list[DetailedError]] = UNSET
    total_count: int = 0


class ApiResponseListModelsResponsesResponseIosRankingItemDict(TypedDict):
    data: NotRequired[list[IosRankingItemDict]]
    errors: NotRequired[list[DetailedErrorDict]]
    total_count: NotRequired[int]
