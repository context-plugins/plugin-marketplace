from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cloud_watch_metrics_detail import CloudWatchMetricsDetail, CloudWatchMetricsDetailDict
from .performance_insights_metrics_detail import PerformanceInsightsMetricsDetail, PerformanceInsightsMetricsDetailDict


class AnomalySourceDetails(SdkBaseModel):
    cloud_watch_metrics: Optional[list[CloudWatchMetricsDetail]] = Field(default=UNSET, alias="CloudWatchMetrics")
    """An array of CloudWatchMetricsDetail objects that contain information about analyzed CloudWatch metrics that show
    anomalous behavior."""

    performance_insights_metrics: Optional[list[PerformanceInsightsMetricsDetail]] = Field(
        default=UNSET, alias="PerformanceInsightsMetrics"
    )
    """An array of PerformanceInsightsMetricsDetail objects that contain information about analyzed Performance Insights
    metrics that show anomalous behavior."""


class AnomalySourceDetailsDict(TypedDict):
    cloud_watch_metrics: NotRequired[list[CloudWatchMetricsDetailDict]]
    performance_insights_metrics: NotRequired[list[PerformanceInsightsMetricsDetailDict]]
