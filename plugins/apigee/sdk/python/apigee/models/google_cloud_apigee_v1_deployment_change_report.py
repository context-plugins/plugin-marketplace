from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_deployment_change_report_routing_change import (
    GoogleCloudApigeeV1DeploymentChangeReportRoutingChange,
    GoogleCloudApigeeV1DeploymentChangeReportRoutingChangeDict,
)
from .google_cloud_apigee_v1_deployment_change_report_routing_conflict import (
    GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict,
    GoogleCloudApigeeV1DeploymentChangeReportRoutingConflictDict,
)
from .google_rpc_precondition_failure2 import GoogleRpcPreconditionFailure2, GoogleRpcPreconditionFailure2Dict


class GoogleCloudApigeeV1DeploymentChangeReport(SdkBaseModel):
    """Response for GenerateDeployChangeReport and GenerateUndeployChangeReport. This report contains any validation
    failures that would cause the deployment to be rejected, as well changes and conflicts in routing that may occur due
    to the new deployment. The existence of a routing warning does not necessarily imply that the deployment request is
    bad, if the desired state of the deployment request is to effect a routing change. The primary purposes of the
    routing messages are: 1) To inform users of routing changes that may have an effect on traffic currently being
    routed to other existing deployments. 2) To warn users if some base path in the proxy will not receive traffic due
    to an existing deployment having already claimed that base path. The presence of routing conflicts/changes will not
    cause non-dry-run DeployApiProxy/UndeployApiProxy requests to be rejected."""

    routing_changes: Optional[list[GoogleCloudApigeeV1DeploymentChangeReportRoutingChange]] = Field(
        default=UNSET, alias="routingChanges"
    )
    """All routing changes that may result from a deployment request."""

    routing_conflicts: Optional[list[GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict]] = Field(
        default=UNSET, alias="routingConflicts"
    )
    """All base path conflicts detected for a deployment request."""

    validation_errors: Optional[GoogleRpcPreconditionFailure2] = Field(default=UNSET, alias="validationErrors")
    """Validation errors that would cause the deployment change request to be rejected."""


class GoogleCloudApigeeV1DeploymentChangeReportDict(TypedDict):
    routing_changes: NotRequired[list[GoogleCloudApigeeV1DeploymentChangeReportRoutingChangeDict]]
    routing_conflicts: NotRequired[list[GoogleCloudApigeeV1DeploymentChangeReportRoutingConflictDict]]
    validation_errors: NotRequired[GoogleRpcPreconditionFailure2Dict]
