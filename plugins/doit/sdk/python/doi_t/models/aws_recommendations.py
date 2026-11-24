from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .aws_recommendation import AwsRecommendation, AwsRecommendationDict


class AwsRecommendations(SdkBaseModel):
    compute: Optional[AwsRecommendation] = UNSET
    """Recommendation for the Compute commitment type."""

    database: Optional[AwsRecommendation] = UNSET
    """Recommendation for the Database commitment type."""


class AwsRecommendationsDict(TypedDict):
    compute: NotRequired[AwsRecommendationDict]
    database: NotRequired[AwsRecommendationDict]
