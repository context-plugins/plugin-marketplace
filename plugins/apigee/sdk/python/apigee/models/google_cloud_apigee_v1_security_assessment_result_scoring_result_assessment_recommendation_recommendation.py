from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_security_assessment_result_scoring_result_assessment_recommendation_recommendation_link2 import (
    GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink2,
    GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink2Dict,
)


class GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendation(SdkBaseModel):
    """The format of the assessment recommendation."""

    description: Optional[str] = UNSET
    """The description of the recommendation."""

    link: Optional[
        GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink2
    ] = UNSET
    """The link for the recommendation."""


class GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationDict(TypedDict):
    description: NotRequired[str]
    link: NotRequired[
        GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationLink2Dict
    ]
