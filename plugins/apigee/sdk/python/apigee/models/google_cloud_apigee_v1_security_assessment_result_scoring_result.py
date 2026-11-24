from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.severity import SeverityOrStr
from .google_cloud_apigee_v1_security_assessment_result_scoring_result_assessment_recommendation import (
    GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendation,
    GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationDict,
)


class GoogleCloudApigeeV1SecurityAssessmentResultScoringResult(SdkBaseModel):
    """The result of the assessment."""

    data_update_time: Optional[str] = Field(default=UNSET, alias="dataUpdateTime")
    """The time when resource data was last fetched for this resource. This time may be different than when the resource
    was actually updated due to lag in data collection."""

    score: Optional[int] = UNSET
    """The security score of the assessment."""

    severity: Optional[SeverityOrStr] = UNSET
    assessment_recommendations: Optional[
        dict[str, GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendation]
    ] = Field(default=UNSET, alias="assessmentRecommendations")
    """The recommendations of the assessment. The key is the "name" of the assessment (not display_name), and the value
    are the recommendations."""

    failed_assessment_per_weight: Optional[dict[str, int]] = Field(default=UNSET, alias="failedAssessmentPerWeight")
    """The number of failed assessments grouped by its weight. Keys are one of the following: "MAJOR", "MODERATE",
    "MINOR"."""


class GoogleCloudApigeeV1SecurityAssessmentResultScoringResultDict(TypedDict):
    data_update_time: NotRequired[str]
    score: NotRequired[int]
    severity: NotRequired[SeverityOrStr]
    assessment_recommendations: NotRequired[
        dict[str, GoogleCloudApigeeV1SecurityAssessmentResultScoringResultAssessmentRecommendationDict]
    ]
    failed_assessment_per_weight: NotRequired[dict[str, int]]
