from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .performance_insights_metric_dimension_group import (
    PerformanceInsightsMetricDimensionGroup,
    PerformanceInsightsMetricDimensionGroupDict,
)


class PerformanceInsightsMetricQuery(SdkBaseModel):
    metric: Optional[str] = Field(default=UNSET, alias="Metric")
    """The name of the meteric used used when querying an Performance Insights GetResourceMetrics API for anomaly
    metrics. Valid values for Metric are: db.load.avg - a scaled representation of the number of active sessions for the
    database engine. db.sampledload.avg - the raw number of active sessions for the database engine. If the number of
    active sessions is less than an internal Performance Insights threshold, db.load.avg and db.sampledload.avg are the
    same value. If the number of active sessions is greater than the internal threshold, Performance Insights samples
    the active sessions, with db.loa"""

    group_by: Optional[PerformanceInsightsMetricDimensionGroup] = Field(default=UNSET, alias="GroupBy")
    filter: Optional[dict[str, str]] = Field(default=UNSET, alias="Filter")
    """One or more filters to apply to a Performance Insights GetResourceMetrics API query. Restrictions: Any number of
    filters by the same dimension, as specified in the GroupBy parameter. A single filter for any other dimension in
    this dimension group."""


class PerformanceInsightsMetricQueryDict(TypedDict):
    metric: NotRequired[str]
    group_by: NotRequired[PerformanceInsightsMetricDimensionGroupDict]
    filter: NotRequired[dict[str, str]]
