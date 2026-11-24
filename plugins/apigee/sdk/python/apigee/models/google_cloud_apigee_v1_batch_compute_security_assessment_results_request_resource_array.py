from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_batch_compute_security_assessment_results_request_resource_array_resource import (
    GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArrayResource,
    GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArrayResourceDict,
)


class GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray(SdkBaseModel):
    """Message for the array of resources. For Apigee, the proxies are resources."""

    resources: Optional[
        list[GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArrayResource]
    ] = UNSET
    """Required. The array of resources. For Apigee, the proxies are resources."""


class GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArrayDict(TypedDict):
    resources: NotRequired[
        list[GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArrayResourceDict]
    ]
