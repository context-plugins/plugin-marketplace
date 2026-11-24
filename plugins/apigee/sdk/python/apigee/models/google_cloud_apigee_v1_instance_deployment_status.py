from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_instance_deployment_status_deployed_revision import (
    GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision,
    GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevisionDict,
)
from .google_cloud_apigee_v1_instance_deployment_status_deployed_route import (
    GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute,
    GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRouteDict,
)


class GoogleCloudApigeeV1InstanceDeploymentStatus(SdkBaseModel):
    """The status of a deployment as reported by a single instance."""

    deployed_revisions: Optional[list[GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevision]] = Field(
        default=UNSET, alias="deployedRevisions"
    )
    """Revisions currently deployed in MPs."""

    instance: Optional[str] = UNSET
    """ID of the instance reporting the status."""

    deployed_routes: Optional[list[GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRoute]] = Field(
        default=UNSET, alias="deployedRoutes"
    )
    """Current routes deployed in the ingress routing table. A route which is missing will appear in
    ``missing_routes``."""


class GoogleCloudApigeeV1InstanceDeploymentStatusDict(TypedDict):
    deployed_revisions: NotRequired[list[GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRevisionDict]]
    instance: NotRequired[str]
    deployed_routes: NotRequired[list[GoogleCloudApigeeV1InstanceDeploymentStatusDeployedRouteDict]]
