from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .detailed_error import DetailedError, DetailedErrorDict
from .play_ranking_item import PlayRankingItem, PlayRankingItemDict


class ApiResponseListModelsResponsesResponsePlayRankingItem(SdkBaseModel):
    data: Optional[list[PlayRankingItem]] = UNSET
    errors: Optional[list[DetailedError]] = UNSET
    total_count: int = 0


class ApiResponseListModelsResponsesResponsePlayRankingItemDict(TypedDict):
    data: NotRequired[list[PlayRankingItemDict]]
    errors: NotRequired[list[DetailedErrorDict]]
    total_count: NotRequired[int]
