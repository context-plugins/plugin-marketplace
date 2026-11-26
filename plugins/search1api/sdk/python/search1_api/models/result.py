from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error2 import Error2, Error2Dict
from .search_response import SearchResponse, SearchResponseDict


class Result(SdkBaseModel):
    success: bool
    data: Optional[SearchResponse] = UNSET
    error: Optional[Error2] = UNSET
    cost: int


class ResultDict(TypedDict):
    success: bool
    data: NotRequired[SearchResponseDict]
    error: NotRequired[Error2Dict]
    cost: int
