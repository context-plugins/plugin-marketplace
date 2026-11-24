from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .baseline import Baseline, BaselineDict


class DescribeMonitorResponse(SdkBaseModel):
    monitor_name: Optional[str] = Field(default=UNSET, alias="MonitorName")
    """The name of the monitor."""

    monitor_arn: Optional[str] = Field(default=UNSET, alias="MonitorArn")
    """The Amazon Resource Name (ARN) of the monitor resource described."""

    resource_arn: Optional[str] = Field(default=UNSET, alias="ResourceArn")
    """The Amazon Resource Name (ARN) of the auto predictor being monitored."""

    status: Optional[str] = Field(default=UNSET, alias="Status")
    """The status of the monitor resource."""

    last_evaluation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastEvaluationTime")
    """The timestamp of the latest evaluation completed by the monitor."""

    last_evaluation_state: Optional[str] = Field(default=UNSET, alias="LastEvaluationState")
    """The state of the monitor's latest evaluation."""

    baseline: Optional[Baseline] = Field(default=UNSET, alias="Baseline")
    message: Optional[str] = Field(default=UNSET, alias="Message")
    """An error message, if any, for the monitor."""

    creation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="CreationTime")
    """The timestamp for when the monitor resource was created."""

    last_modification_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="LastModificationTime")
    """The timestamp of the latest modification to the monitor."""

    estimated_evaluation_time_remaining_in_minutes: Optional[int] = Field(
        default=UNSET, alias="EstimatedEvaluationTimeRemainingInMinutes"
    )
    """The estimated number of minutes remaining before the monitor resource finishes its current evaluation."""


class DescribeMonitorResponseDict(TypedDict):
    monitor_name: NotRequired[str]
    monitor_arn: NotRequired[str]
    resource_arn: NotRequired[str]
    status: NotRequired[str]
    last_evaluation_time: NotRequired[RFC3339DateTime]
    last_evaluation_state: NotRequired[str]
    baseline: NotRequired[BaselineDict]
    message: NotRequired[str]
    creation_time: NotRequired[RFC3339DateTime]
    last_modification_time: NotRequired[RFC3339DateTime]
    estimated_evaluation_time_remaining_in_minutes: NotRequired[int]
