from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.risk_assessment_type1 import RiskAssessmentType1OrStr
from .google_cloud_apigee_v1_batch_compute_security_assessment_results_request_resource_array1 import (
    GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1,
    GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1Dict,
)


class GoogleCloudApigeeV1SecurityMonitoringCondition(SdkBaseModel):
    """Security monitoring condition for risk assessment version 2."""

    include_all_resources: Optional[Any] = Field(default=UNSET, alias="includeAllResources")
    """Include all resources under the scope."""

    total_deployed_resources: Optional[int] = Field(default=UNSET, alias="totalDeployedResources")
    """Output only. Total number of deployed resources within scope."""

    api_hub_gateway: Optional[str] = Field(default=UNSET, alias="apiHubGateway")
    """Optional. The API Hub gateway monitored by the security monitoring condition. This should only be set if
    risk_assessment_type is API_HUB. Format:
    ``projects/{project}/locations/{location}/plugins/{plugin}/instances/{instance}``"""

    include: Optional[GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1] = UNSET
    """Include only these resources."""

    create_time: Optional[str] = Field(default=UNSET, alias="createTime")
    """Output only. The time of the security monitoring condition creation."""

    profile: Optional[str] = UNSET
    """Required. ID of security profile of the security monitoring condition."""

    risk_assessment_type: Optional[RiskAssessmentType1OrStr] = Field(default=UNSET, alias="riskAssessmentType")
    """Optional. The risk assessment type of the security monitoring condition. Defaults to ADVANCED_API_SECURITY."""

    name: Optional[str] = UNSET
    """Identifier. Name of the security monitoring condition resource. Format:
    organizations/{org}/securityMonitoringConditions/{security_monitoring_condition}"""

    total_monitored_resources: Optional[int] = Field(default=UNSET, alias="totalMonitoredResources")
    """Output only. Total number of monitored resources within this condition."""

    update_time: Optional[str] = Field(default=UNSET, alias="updateTime")
    """Output only. The time of the security monitoring condition update."""

    scope: Optional[str] = UNSET
    """Optional. Scope of the security monitoring condition. When RiskAssessmentType is APIGEE, the scope should be set
    to the environment of the resources. When RiskAssessmentType is API_HUB, the scope should not be set."""


class GoogleCloudApigeeV1SecurityMonitoringConditionDict(TypedDict):
    include_all_resources: NotRequired[Any]
    total_deployed_resources: NotRequired[int]
    api_hub_gateway: NotRequired[str]
    include: NotRequired[GoogleCloudApigeeV1BatchComputeSecurityAssessmentResultsRequestResourceArray1Dict]
    create_time: NotRequired[str]
    profile: NotRequired[str]
    risk_assessment_type: NotRequired[RiskAssessmentType1OrStr]
    name: NotRequired[str]
    total_monitored_resources: NotRequired[int]
    update_time: NotRequired[str]
    scope: NotRequired[str]
