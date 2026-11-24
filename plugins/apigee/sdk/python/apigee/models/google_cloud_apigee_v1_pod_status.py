from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleCloudApigeeV1PodStatus(SdkBaseModel):
    deployment_status_time: Optional[str] = Field(default=UNSET, alias="deploymentStatusTime")
    """Time the deployment status was reported in milliseconds since epoch."""

    pod_name: Optional[str] = Field(default=UNSET, alias="podName")
    """Name of the pod which is reporting the status."""

    app_version: Optional[str] = Field(default=UNSET, alias="appVersion")
    """Version of the application running in the pod."""

    status_code: Optional[str] = Field(default=UNSET, alias="statusCode")
    """Code associated with the deployment status."""

    deployment_status: Optional[str] = Field(default=UNSET, alias="deploymentStatus")
    """Status of the deployment. Valid values include: - ``deployed``: Successful. - ``error`` : Failed. - ``pending`` :
    Pod has not yet reported on the deployment."""

    pod_status_time: Optional[str] = Field(default=UNSET, alias="podStatusTime")
    """Time the pod status was reported in milliseconds since epoch."""

    pod_status: Optional[str] = Field(default=UNSET, alias="podStatus")
    """Overall status of the pod (not this specific deployment). Valid values include: - ``active``: Up to date. -
    ``stale`` : Recently out of date. Pods that have not reported status in a long time are excluded from the output."""

    status_code_details: Optional[str] = Field(default=UNSET, alias="statusCodeDetails")
    """Human-readable message associated with the status code."""

    deployment_time: Optional[str] = Field(default=UNSET, alias="deploymentTime")
    """Time the proxy was deployed in milliseconds since epoch."""


class GoogleCloudApigeeV1PodStatusDict(TypedDict):
    deployment_status_time: NotRequired[str]
    pod_name: NotRequired[str]
    app_version: NotRequired[str]
    status_code: NotRequired[str]
    deployment_status: NotRequired[str]
    pod_status_time: NotRequired[str]
    pod_status: NotRequired[str]
    status_code_details: NotRequired[str]
    deployment_time: NotRequired[str]
