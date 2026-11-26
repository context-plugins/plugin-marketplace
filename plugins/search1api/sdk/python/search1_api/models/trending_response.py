from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .trending_request import TrendingRequest, TrendingRequestDict
from .trending_result import TrendingResult, TrendingResultDict


class TrendingResponse(SdkBaseModel):
    trending_parameters: TrendingRequest = Field(alias="trendingParameters")
    results: list[TrendingResult]


class TrendingResponseDict(TypedDict):
    trending_parameters: TrendingRequestDict
    results: list[TrendingResultDict]
