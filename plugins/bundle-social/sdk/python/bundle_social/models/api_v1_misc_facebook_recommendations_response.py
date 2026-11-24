from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .recommendation import Recommendation, RecommendationDict


class ApiV1MiscFacebookRecommendationsResponse(SdkBaseModel):
    recommendations: list[Recommendation]
    total: float
    limit: float
    remaining_capacity: float = Field(alias="remainingCapacity")


class ApiV1MiscFacebookRecommendationsResponseDict(TypedDict):
    recommendations: list[RecommendationDict]
    total: float
    limit: float
    remaining_capacity: float
