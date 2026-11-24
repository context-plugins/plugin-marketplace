from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .recommendation import Recommendation, RecommendationDict


class ListRecommendationsResponse(SdkBaseModel):
    recommendations: Optional[list[Recommendation]] = Field(default=UNSET, alias="Recommendations")
    """An array of the requested recommendations."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """The pagination token to use to retrieve the next page of results for this operation. If there are no more pages,
    this value is null."""


class ListRecommendationsResponseDict(TypedDict):
    recommendations: NotRequired[list[RecommendationDict]]
    next_token: NotRequired[str]
