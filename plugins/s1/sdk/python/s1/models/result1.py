from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error2 import Error2, Error2Dict
from .news_response import NewsResponse, NewsResponseDict


class Result1(SdkBaseModel):
    success: bool
    data: Optional[NewsResponse] = UNSET
    error: Optional[Error2] = UNSET
    cost: int


class Result1Dict(TypedDict):
    success: bool
    data: NotRequired[NewsResponseDict]
    error: NotRequired[Error2Dict]
    cost: int
