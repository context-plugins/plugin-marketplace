from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .performance_insights_metric_query import PerformanceInsightsMetricQuery, PerformanceInsightsMetricQueryDict
from .performance_insights_reference_data import PerformanceInsightsReferenceData, PerformanceInsightsReferenceDataDict
from .performance_insights_stat import PerformanceInsightsStat, PerformanceInsightsStatDict


class PerformanceInsightsMetricsDetail(SdkBaseModel):
    metric_display_name: Optional[str] = Field(default=UNSET, alias="MetricDisplayName")
    """The name used for a specific Performance Insights metric."""

    unit: Optional[str] = Field(default=UNSET, alias="Unit")
    """The unit of measure for a metric. For example, a session or a process."""

    metric_query: Optional[PerformanceInsightsMetricQuery] = Field(default=UNSET, alias="MetricQuery")
    reference_data: Optional[list[PerformanceInsightsReferenceData]] = Field(default=UNSET, alias="ReferenceData")
    """For more information, see PerformanceInsightsReferenceData ."""

    stats_at_anomaly: Optional[list[PerformanceInsightsStat]] = Field(default=UNSET, alias="StatsAtAnomaly")
    """The metric statistics during the anomalous period detected by DevOps Guru;"""

    stats_at_baseline: Optional[list[PerformanceInsightsStat]] = Field(default=UNSET, alias="StatsAtBaseline")
    """Typical metric statistics that are not considered anomalous. When DevOps Guru analyzes metrics, it compares them
    to StatsAtBaseline to help determine if they are anomalous."""


class PerformanceInsightsMetricsDetailDict(TypedDict):
    metric_display_name: NotRequired[str]
    unit: NotRequired[str]
    metric_query: NotRequired[PerformanceInsightsMetricQueryDict]
    reference_data: NotRequired[list[PerformanceInsightsReferenceDataDict]]
    stats_at_anomaly: NotRequired[list[PerformanceInsightsStatDict]]
    stats_at_baseline: NotRequired[list[PerformanceInsightsStatDict]]
