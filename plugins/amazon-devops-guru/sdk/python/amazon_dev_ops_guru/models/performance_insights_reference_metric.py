from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .performance_insights_metric_query import PerformanceInsightsMetricQuery, PerformanceInsightsMetricQueryDict


class PerformanceInsightsReferenceMetric(SdkBaseModel):
    metric_query: Optional[PerformanceInsightsMetricQuery] = Field(default=UNSET, alias="MetricQuery")


class PerformanceInsightsReferenceMetricDict(TypedDict):
    metric_query: NotRequired[PerformanceInsightsMetricQueryDict]
