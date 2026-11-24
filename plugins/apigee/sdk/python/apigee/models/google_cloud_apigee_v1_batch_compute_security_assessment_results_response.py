from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_security_assessment_result import (
    GoogleCloudApigeeV1SecurityAssessmentResult,
    GoogleCloudApigeeV1SecurityAssessmentResultDict,
)


class GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponse(SdkBaseModel):
    """Response for BatchComputeSecurityAssessmentResults."""

    assessment_time: Optional[str] = Field(default=UNSET, alias="assessmentTime")
    """The time of the assessment api call."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token that can be sent as ``page_token`` to retrieve the next page. If this field is blank, there are no
    subsequent pages."""

    security_assessment_results: Optional[list[GoogleCloudApigeeV1SecurityAssessmentResult]] = Field(
        default=UNSET, alias="securityAssessmentResults"
    )
    """Default sort order is by resource name in alphabetic order."""


class GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsResponseDict(TypedDict):
    assessment_time: NotRequired[str]
    next_page_token: NotRequired[str]
    security_assessment_results: NotRequired[list[GoogleCloudApigeeV1SecurityAssessmentResultDict]]
