from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_batch_compute_security_assessment_results_request_api_hub_api_array2 import (
    GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray2,
    GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray2Dict,
)
from .google_cloud_apigee_v1_batch_compute_security_assessment_results_request_api_hub_gateway_array2 import (
    GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray2,
    GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray2Dict,
)
from .google_cloud_apigee_v1_batch_compute_security_assessment_results_request_resource_array1 import (
    GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1,
    GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1Dict,
)


class GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequest(SdkBaseModel):
    """Request for BatchComputeSecurityAssessmentResults."""

    include_all_resources: Optional[Any] = Field(default=UNSET, alias="includeAllResources")
    """Include all resources under the scope."""

    profile: Optional[str] = UNSET
    """Required. Name of the profile that is used for computation."""

    scope: Optional[str] = UNSET
    """Optional. Scope of the resources for the computation. When computing scores for Apigee proxies, the scope should
    be set to the environment of the resources. When computing scores for API Hub deployments, api_hub_scope should be
    set instead."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Optional. A page token, received from a previous ``BatchComputeSecurityAssessmentResults`` call. Provide this to
    retrieve the subsequent page."""

    api_hub_apis: Optional[GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray2] = Field(
        default=UNSET, alias="apiHubApis"
    )
    """An array of API Hub APIs to assess. A maximum of 1 API can be assessed."""

    page_size: Optional[int] = Field(default=UNSET, alias="pageSize")
    """Optional. The maximum number of results to return. The service may return fewer than this value. If unspecified,
    at most 50 results will be returned."""

    include: Optional[GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1] = UNSET
    """Include only these resources."""

    api_hub_gateways: Optional[
        GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray2
    ] = Field(default=UNSET, alias="apiHubGateways")
    """An array of API Hub Gateways to assess. A maximum of 3 gateways can be assessed."""


class GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestDict(TypedDict):
    include_all_resources: NotRequired[Any]
    profile: NotRequired[str]
    scope: NotRequired[str]
    page_token: NotRequired[str]
    api_hub_apis: NotRequired[GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubApiArray2Dict]
    page_size: NotRequired[int]
    include: NotRequired[GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1Dict]
    api_hub_gateways: NotRequired[
        GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestApiHubGatewayArray2Dict
    ]
