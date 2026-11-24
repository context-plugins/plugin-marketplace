from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.verdict1 import Verdict1OrStr
from .enums.weight1 import Weight1OrStr
from .google_cloud_apigee_v1_security_assessment_result_scoring_result_assessment_recommendation_recommendation import (
    GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendation,
    GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationDict,
)


class GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendation(SdkBaseModel):
    """The message format of a recommendation from the assessment."""

    score_impact: Optional[int] = Field(default=UNSET, alias="scoreImpact")
    """Score impact indicates the impact on the overall score if the assessment were to pass."""

    display_name: Optional[str] = Field(default=UNSET, alias="displayName")
    """The display name of the assessment."""

    recommendations: Optional[
        list[GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendation]
    ] = UNSET
    """The recommended steps of the assessment."""

    verdict: Optional[Verdict1OrStr] = UNSET
    """Verdict indicates the assessment result."""

    weight: Optional[Weight1OrStr] = UNSET
    """The weight of the assessment which was set in the profile."""


class GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationDict(TypedDict):
    score_impact: NotRequired[int]
    display_name: NotRequired[str]
    recommendations: NotRequired[
        list[GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationRecommendationDict]
    ]
    verdict: NotRequired[Verdict1OrStr]
    weight: NotRequired[Weight1OrStr]
