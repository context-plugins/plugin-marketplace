from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_security_assessment_result_resource2 import (
    GoogleCloudApigeeV1SecurityAssessmentResultResource2,
    GoogleCloudApigeeV1SecurityAssessmentResultResource2Dict,
)
from .google_cloud_apigee_v1_security_assessment_result_scoring_result import (
    GoogleCloudApigeeV1SecurityAssessmentResultScoringResult,
    GoogleCloudApigeeV1SecurityAssessmentResultScoringResultDict,
)
from .google_rpc_status2 import GoogleRpcStatus2, GoogleRpcStatus2Dict


class GoogleCloudApigeeV1SecurityAssessmentResult(SdkBaseModel):
    """The security assessment result for one resource."""

    resource: Optional[GoogleCloudApigeeV1SecurityAssessmentResultResource2] = UNSET
    """The assessed resource."""

    scoring_result: Optional[GoogleCloudApigeeV1SecurityAssessmentResultScoringResult] = Field(
        default=UNSET, alias="scoringResult"
    )
    """The result of the assessment."""

    error: Optional[GoogleRpcStatus2] = UNSET
    """The error status if scoring fails."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """The time of the assessment of this resource. This could lag behind ``assessment_time`` due to caching within the
    backend."""


class GoogleCloudApigeeV1SecurityAssessmentResultDict(TypedDict):
    resource: NotRequired[GoogleCloudApigeeV1SecurityAssessmentResultResource2Dict]
    scoring_result: NotRequired[GoogleCloudApigeeV1SecurityAssessmentResultScoringResultDict]
    error: NotRequired[GoogleRpcStatus2Dict]
    create_time: NotRequired[str]
