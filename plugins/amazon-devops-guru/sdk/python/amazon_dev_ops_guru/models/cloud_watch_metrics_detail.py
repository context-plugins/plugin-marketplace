from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_watch_metrics_data_summary import CloudWatchMetricsDataSummary, CloudWatchMetricsDataSummaryDict
from .cloud_watch_metrics_dimension import CloudWatchMetricsDimension, CloudWatchMetricsDimensionDict
from .enums.stat import StatOrStr


class CloudWatchMetricsDetail(SdkBaseModel):
    metric_name: Optional[str] = Field(default=UNSET, alias="MetricName")
    """The name of the CloudWatch metric."""

    namespace: Optional[str] = Field(default=UNSET, alias="Namespace")
    """The namespace of the CloudWatch metric. A namespace is a container for CloudWatch metrics."""

    dimensions: Optional[list[CloudWatchMetricsDimension]] = Field(default=UNSET, alias="Dimensions")
    """An array of CloudWatch dimensions associated with"""

    stat: Optional[StatOrStr] = Field(default=UNSET, alias="Stat")
    """The type of statistic associated with the CloudWatch metric. For more information, see Statistics in the Amazon
    CloudWatch User Guide."""

    unit: Optional[str] = Field(default=UNSET, alias="Unit")
    """The unit of measure used for the CloudWatch metric. For example, Bytes, Seconds, Count, and Percent."""

    period: Optional[int] = Field(default=UNSET, alias="Period")
    """The length of time associated with the CloudWatch metric in number of seconds."""

    metric_data_summary: Optional[CloudWatchMetricsDataSummary] = Field(default=UNSET, alias="MetricDataSummary")


class CloudWatchMetricsDetailDict(TypedDict):
    metric_name: NotRequired[str]
    namespace: NotRequired[str]
    dimensions: NotRequired[list[CloudWatchMetricsDimensionDict]]
    stat: NotRequired[StatOrStr]
    unit: NotRequired[str]
    period: NotRequired[int]
    metric_data_summary: NotRequired[CloudWatchMetricsDataSummaryDict]
