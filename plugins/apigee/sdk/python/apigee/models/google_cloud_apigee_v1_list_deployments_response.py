from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_deployment import GoogleCloudApigeeV1Deployment, GoogleCloudApigeeV1DeploymentDict


class GoogleCloudApigeeV1ListDeploymentsResponse(SdkBaseModel):
    deployments: Optional[list[GoogleCloudApigeeV1Deployment]] = UNSET
    """List of deployments."""


class GoogleCloudApigeeV1ListDeploymentsResponseDict(TypedDict):
    deployments: NotRequired[list[GoogleCloudApigeeV1DeploymentDict]]
