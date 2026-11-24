from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class MonitorSummary(SdkBaseModel):
    monitor_arn: Optional[str] = Field(default=UNSET, alias="MonitorArn")
    """The Amazon Resource Name (ARN) of the monitor resource."""

    monitor_name: Optional[str] = Field(default=UNSET, alias="MonitorName")
    """The name of the monitor resource."""

    resource_arn: Optional[str] = Field(default=UNSET, alias="ResourceArn")
    """The Amazon Resource Name (ARN) of the predictor being monitored."""

    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the monitor. States include: ACTIVE ACTIVE_STOPPING, ACTIVE_STOPPED UPDATE_IN_PROGRESS
    CREATE_PENDING, CREATE_IN_PROGRESS, CREATE_FAILED DELETE_PENDING, DELETE_IN_PROGRESS, DELETE_FAILED"""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """When the monitor resource was created."""

    last_modification_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModificationTime")
    """The last time the monitor resource was modified. The timestamp depends on the status of the job: CREATE_PENDING -
    The CreationTime. CREATE_IN_PROGRESS - The current timestamp. STOPPED - When the resource stopped. ACTIVE or
    CREATE_FAILED - When the monitor creation finished or failed."""


class MonitorSummaryDict(TypedDict):
    monitor_arn: NotRequired[str]
    monitor_name: NotRequired[str]
    resource_arn: NotRequired[str]
    status: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
