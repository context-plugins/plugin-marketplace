from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.proxy_deployment_type import ProxyDeploymentTypeOrStr
from .enums.state1 import State1OrStr
from .google_cloud_apigee_v1_deployment_change_report_routing_conflict import (
    GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict,
    GoogleCloudApigeeV1DeploymentChangeReportRoutingConflictDict,
)
from .google_cloud_apigee_v1_instance_deployment_status import (
    GoogleCloudApigeeV1InstanceDeploymentStatus,
    GoogleCloudApigeeV1InstanceDeploymentStatusDict,
)
from .google_cloud_apigee_v1_pod_status import GoogleCloudApigeeV1PodStatus, GoogleCloudApigeeV1PodStatusDict
from .google_rpc_status import GoogleRpcStatus, GoogleRpcStatusDict


class GoogleCloudApigeeV1Deployment(SdkBaseModel):
    """Deployment represents a deployment of an API proxy or shared flow."""

    errors: Optional[list[GoogleRpcStatus]] = UNSET
    """Errors reported for this deployment. Populated only when state == ERROR. **Note**: This field is displayed only
    when viewing deployment status."""

    deploy_start_time: Optional[str] = Field(default=UNSET, alias="deployStartTime")
    """Time the API proxy was marked ``deployed`` in the control plane in millisconds since epoch."""

    revision: Optional[str] = UNSET
    """API proxy revision."""

    environment: Optional[str] = UNSET
    """Environment."""

    state: Optional[State1OrStr] = UNSET
    """Current state of the deployment. **Note**: This field is displayed only when viewing deployment status."""

    route_conflicts: Optional[list[GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict]] = Field(
        default=UNSET, alias="routeConflicts"
    )
    """Conflicts in the desired state routing configuration. The presence of conflicts does not cause the state to be
    ``ERROR``, but it will mean that some of the deployment's base paths are not routed to its environment. If the
    conflicts change, the state will transition to ``PROGRESSING`` until the latest configuration is rolled out to all
    instances. **Note**: This field is displayed only when viewing deployment status."""

    instances: Optional[list[GoogleCloudApigeeV1InstanceDeploymentStatus]] = UNSET
    """Status reported by each runtime instance. **Note**: This field is displayed only when viewing deployment
    status."""

    service_account: Optional[str] = Field(default=UNSET, alias="serviceAccount")
    """The full resource name of Cloud IAM Service Account that this deployment is using, eg,
    ``projects/-/serviceAccounts/{email}``."""

    api_proxy: Optional[str] = Field(default=UNSET, alias="apiProxy")
    """API proxy."""

    proxy_deployment_type: Optional[ProxyDeploymentTypeOrStr] = Field(default=UNSET, alias="proxyDeploymentType")
    """Output only. The type of the deployment (standard or extensible) Deployed proxy revision will be marked as
    extensible in following 2 cases. 1. The deployed proxy revision uses extensible policies. 2. If a environment
    supports flowhooks and flow hook is configured."""

    pods: Optional[list[GoogleCloudApigeeV1PodStatus]] = UNSET
    """Status reported by runtime pods. **Note**: **This field is deprecated**. Runtime versions 1.3 and above report
    instance level status rather than pod status."""


class GoogleCloudApigeeV1DeploymentDict(TypedDict):
    errors: NotRequired[list[GoogleRpcStatusDict]]
    deploy_start_time: NotRequired[str]
    revision: NotRequired[str]
    environment: NotRequired[str]
    state: NotRequired[State1OrStr]
    route_conflicts: NotRequired[list[GoogleCloudApigeeV1DeploymentChangeReportRoutingConflictDict]]
    instances: NotRequired[list[GoogleCloudApigeeV1InstanceDeploymentStatusDict]]
    service_account: NotRequired[str]
    api_proxy: NotRequired[str]
    proxy_deployment_type: NotRequired[ProxyDeploymentTypeOrStr]
    pods: NotRequired[list[GoogleCloudApigeeV1PodStatusDict]]
