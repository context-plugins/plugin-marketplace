from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_score_component_recommendation_action import (
    GoogleCloudApigeeV1ScoreComponentRecommendationAction,
    GoogleCloudApigeeV1ScoreComponentRecommendationActionDict,
)


class GoogleCloudApigeeV1ScoreComponentRecommendation(SdkBaseModel):
    """Recommendation based on security concerns and score."""

    title: Optional[str] = UNSET
    """Title represents recommendation title."""

    impact: Optional[int] = UNSET
    """Potential impact of this recommendation on the overall score. This denotes how important this recommendation is
    to improve the score."""

    description: Optional[str] = UNSET
    """Description of the recommendation."""

    actions: Optional[list[GoogleCloudApigeeV1ScoreComponentRecommendationAction]] = UNSET
    """Actions for the recommendation to improve the security score."""


class GoogleCloudApigeeV1ScoreComponentRecommendationDict(TypedDict):
    title: NotRequired[str]
    impact: NotRequired[int]
    description: NotRequired[str]
    actions: NotRequired[list[GoogleCloudApigeeV1ScoreComponentRecommendationActionDict]]
