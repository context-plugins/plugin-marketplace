from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_resource_status import (
    GoogleCloudApigeeV1ResourceStatus,
    GoogleCloudApigeeV1ResourceStatusDict,
)


class GoogleCloudApigeeV1ReportInstanceStatusRequest(SdkBaseModel):
    """Request for ReportInstanceStatus."""

    resources: Optional[list[GoogleCloudApigeeV1ResourceStatus]] = UNSET
    """Status for config resources"""

    instance_uid: Optional[str] = Field(default=UNSET, alias="instanceUid")
    """A unique ID for the instance which is guaranteed to be unique in case the user installs multiple hybrid runtimes
    with the same instance ID."""

    report_time: Optional[str] = Field(default=UNSET, alias="reportTime")
    """The time the report was generated in the runtime. Used to prevent an old status from overwriting a newer one. An
    instance should space out it's status reports so that clock skew does not play a factor."""


class GoogleCloudApigeeV1ReportInstanceStatusRequestDict(TypedDict):
    resources: NotRequired[list[GoogleCloudApigeeV1ResourceStatusDict]]
    instance_uid: NotRequired[str]
    report_time: NotRequired[str]
