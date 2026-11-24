from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.status1 import Status1OrStr
from .map_run_execution_counts import MapRunExecutionCounts, MapRunExecutionCountsDict
from .map_run_item_counts import MapRunItemCounts, MapRunItemCountsDict


class DescribeMapRunOutput(SdkBaseModel):
    map_run_arn: str = Field(alias="mapRunArn")
    """The Amazon Resource Name (ARN) that identifies a Map Run."""

    execution_arn: str = Field(alias="executionArn")
    """The Amazon Resource Name (ARN) that identifies the execution in which the Map Run was started."""

    status: Status1OrStr
    """The current status of the Map Run."""

    start_date: RFC3339DateTime = Field(alias="startDate")
    """The date when the Map Run was started."""

    stop_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="stopDate")
    """The date when the Map Run was stopped."""

    max_concurrency: int = Field(alias="maxConcurrency")
    """The maximum number of child workflow executions configured to run in parallel for the Map Run at the same
    time."""

    tolerated_failure_percentage: float = Field(alias="toleratedFailurePercentage")
    """The maximum percentage of failed child workflow executions before the Map Run fails."""

    tolerated_failure_count: int = Field(alias="toleratedFailureCount")
    """The maximum number of failed child workflow executions before the Map Run fails."""

    item_counts: MapRunItemCounts = Field(alias="itemCounts")
    execution_counts: MapRunExecutionCounts = Field(alias="executionCounts")
    redrive_count: Optional[int] = Field(default=UNSET, alias="redriveCount")
    """The number of times you've redriven a Map Run. If you have not yet redriven a Map Run, the redriveCount is 0.
    This count is only updated if you successfully redrive a Map Run."""

    redrive_date: Optional[RFC3339DateTime] = Field(default=UNSET, alias="redriveDate")
    """The date a Map Run was last redriven. If you have not yet redriven a Map Run, the redriveDate is null."""


class DescribeMapRunOutputDict(TypedDict):
    map_run_arn: str
    execution_arn: str
    status: Status1OrStr
    start_date: RFC3339DateTime
    stop_date: NotRequired[RFC3339DateTime]
    max_concurrency: int
    tolerated_failure_percentage: float
    tolerated_failure_count: int
    item_counts: MapRunItemCountsDict
    execution_counts: MapRunExecutionCountsDict
    redrive_count: NotRequired[int]
    redrive_date: NotRequired[RFC3339DateTime]
