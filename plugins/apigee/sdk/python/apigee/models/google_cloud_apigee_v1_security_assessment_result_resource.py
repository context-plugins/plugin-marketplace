from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.api_hub_gateway_type import ApiHubGatewayTypeOrStr
from .enums.type1 import Type1OrStr
from .google_cloud_apigee_v1_security_assessment_result_resource_api_hub_deployment_details2 import (
    GoogleCloudApigeeV1SecurityAssessmentResultResourceApiHubDeploymentDetails2,
    GoogleCloudApigeeV1SecurityAssessmentResultResourceApiHubDeploymentDetails2Dict,
)


class GoogleCloudApigeeV1SecurityAssessmentResultResource(SdkBaseModel):
    """Resource for which we are computing security assessment."""

    api_hub_gateway_type: Optional[ApiHubGatewayTypeOrStr] = Field(default=UNSET, alias="apiHubGatewayType")
    """Optional."""

    api_hub_deployment_details: Optional[
        GoogleCloudApigeeV1SecurityAssessmentResultResourceApiHubDeploymentDetails2
    ] = Field(default=UNSET, alias="apiHubDeploymentDetails")
    """Output only. Additional details for the API Hub deployment."""

    type_: Optional[Type1OrStr] = Field(default=UNSET, alias="type")
    """Required. Type of this resource."""

    name: Optional[str] = UNSET
    """Required. Name of this resource. For an Apigee API Proxy, this should be the id of the API proxy. For an API Hub
    Deployment, this should be the id of the deployment."""

    resource_revision_id: Optional[str] = Field(default=UNSET, alias="resourceRevisionId")
    """The revision id for the resource. In case of Apigee, this is proxy revision id."""


class GoogleCloudApigeeV1SecurityAssessmentResultResourceDict(TypedDict):
    api_hub_gateway_type: NotRequired[ApiHubGatewayTypeOrStr]
    api_hub_deployment_details: NotRequired[
        GoogleCloudApigeeV1SecurityAssessmentResultResourceApiHubDeploymentDetails2Dict
    ]
    type_: NotRequired[Type1OrStr]
    name: NotRequired[str]
    resource_revision_id: NotRequired[str]
