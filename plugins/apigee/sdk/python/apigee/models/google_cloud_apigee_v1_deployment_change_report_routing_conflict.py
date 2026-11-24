from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_deployment_change_report_routing_deployment4 import (
    GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment4,
    GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment4Dict,
)


class GoogleCloudApigeeV1DeploymentChangeReportRoutingConflict(SdkBaseModel):
    """Describes a routing conflict that may cause a deployment not to receive traffic at some base path."""

    conflicting_deployment: Optional[GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment4] = Field(
        default=UNSET, alias="conflictingDeployment"
    )
    """Existing base path/deployment causing the conflict."""

    description: Optional[str] = UNSET
    """Human-readable description of this conflict."""

    environment_group: Optional[str] = Field(default=UNSET, alias="environmentGroup")
    """Name of the environment group in which this conflict exists."""


class GoogleCloudApigeeV1DeploymentChangeReportRoutingConflictDict(TypedDict):
    conflicting_deployment: NotRequired[GoogleCloudApigeeV1DeploymentChangeReportRoutingDeployment4Dict]
    description: NotRequired[str]
    environment_group: NotRequired[str]
