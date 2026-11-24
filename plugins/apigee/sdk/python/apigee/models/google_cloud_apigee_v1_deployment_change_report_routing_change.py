from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_deployment_change_report_routing_deployment2 import (
    GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment2,
    GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment2Dict,
)
from .google_cloud_apigee_v1_deployment_change_report_routing_deployment3 import (
    GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment3,
    GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment3Dict,
)


class GoogleCloudApigeeV1DeploymentChangeReportRoutingChange(SdkBaseModel):
    """Describes a potential routing change that may occur as a result of some deployment operation."""

    to_deployment: Optional[GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment2] = Field(
        default=UNSET, alias="toDeployment"
    )
    """Base path/deployment that may start receiving that traffic. May be null if no deployment is able to receive the
    traffic."""

    description: Optional[str] = UNSET
    """Human-readable description of this routing change."""

    should_sequence_rollout: Optional[bool] = Field(default=UNSET, alias="shouldSequenceRollout")
    """Set to ``true`` if using sequenced rollout would make this routing change safer. **Note**: This does not
    necessarily imply that automated sequenced rollout mode is supported for the operation."""

    environment_group: Optional[str] = Field(default=UNSET, alias="environmentGroup")
    """Name of the environment group affected by this routing change."""

    from_deployment: Optional[GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment3] = Field(
        default=UNSET, alias="fromDeployment"
    )
    """Base path/deployment that may stop receiving some traffic."""


class GoogleCloudApigeeV1DeploymentChangeReportRoutingChangeDict(TypedDict):
    to_deployment: NotRequired[GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment2Dict]
    description: NotRequired[str]
    should_sequence_rollout: NotRequired[bool]
    environment_group: NotRequired[str]
    from_deployment: NotRequired[GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment3Dict]
