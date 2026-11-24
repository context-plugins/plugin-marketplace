from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .metric_result import MetricResult, MetricResultDict
from .monitor_data_source import MonitorDataSource, MonitorDataSourceDict
from .predictor_event import PredictorEvent, PredictorEventDict


class PredictorMonitorEvaluation(SdkBaseModel):
    resource_arn: Optional[str] = Field(default=UNSET, alias="ResourceArn")
    """The Amazon Resource Name (ARN) of the resource to monitor."""

    monitor_arn: Optional[str] = Field(default=UNSET, alias="MonitorArn")
    """The Amazon Resource Name (ARN) of the monitor resource."""

    evaluation_time: Optional[RFC3339DateTime] = Field(default=UNSET, alias="EvaluationTime")
    """The timestamp that indicates when the monitor evaluation was started."""

    evaluation_state: Optional[str] = Field(default=UNSET, alias="EvaluationState")
    """The status of the monitor evaluation. The state can be SUCCESS or FAILURE."""

    window_start_datetime: Optional[RFC3339DateTime] = Field(default=UNSET, alias="WindowStartDatetime")
    """The timestamp that indicates the start of the window that is used for monitor evaluation."""

    window_end_datetime: Optional[RFC3339DateTime] = Field(default=UNSET, alias="WindowEndDatetime")
    """The timestamp that indicates the end of the window that is used for monitor evaluation."""

    predictor_event: Optional[PredictorEvent] = Field(default=UNSET, alias="PredictorEvent")
    monitor_data_source: Optional[MonitorDataSource] = Field(default=UNSET, alias="MonitorDataSource")
    metric_results: Optional[list[MetricResult]] = Field(default=UNSET, alias="MetricResults")
    """A list of metrics Forecast calculated when monitoring a predictor. You can compare the value for each metric in
    the list to the metric's value in the Baseline to see how your predictor's performance is changing."""

    num_items_evaluated: Optional[int] = Field(default=UNSET, alias="NumItemsEvaluated")
    """The number of items considered during the evaluation."""

    message: Optional[str] = Field(default=UNSET, alias="Message")
    """Information about any errors that may have occurred during the monitor evaluation."""


class PredictorMonitorEvaluationDict(TypedDict):
    resource_arn: NotRequired[str]
    monitor_arn: NotRequired[str]
    evaluation_time: NotRequired[RFC3339DateTime]
    evaluation_state: NotRequired[str]
    window_start_datetime: NotRequired[RFC3339DateTime]
    window_end_datetime: NotRequired[RFC3339DateTime]
    predictor_event: NotRequired[PredictorEventDict]
    monitor_data_source: NotRequired[MonitorDataSourceDict]
    metric_results: NotRequired[list[MetricResultDict]]
    num_items_evaluated: NotRequired[int]
    message: NotRequired[str]
