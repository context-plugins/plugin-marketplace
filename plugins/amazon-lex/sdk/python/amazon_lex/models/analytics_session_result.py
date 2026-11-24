from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .analytics_bin_key import AnalyticsBinKey, AnalyticsBinKeyDict
from .analytics_session_group_by_key import AnalyticsSessionGroupByKey, AnalyticsSessionGroupByKeyDict
from .analytics_session_metric_result import AnalyticsSessionMetricResult, AnalyticsSessionMetricResultDict


class AnalyticsSessionResult(SdkBaseModel):
    bin_keys: Optional[list[AnalyticsBinKey]] = Field(default=UNSET, alias="binKeys")
    """A list of objects containing the criteria you requested for binning results and the values of the bins."""

    group_by_keys: Optional[list[AnalyticsSessionGroupByKey]] = Field(default=UNSET, alias="groupByKeys")
    """A list of objects containing the criteria you requested for grouping results and the values of the bins."""

    metrics_results: Optional[list[AnalyticsSessionMetricResult]] = Field(default=UNSET, alias="metricsResults")
    """A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to
    return, and the method by which to organize the results."""


class AnalyticsSessionResultDict(TypedDict):
    bin_keys: NotRequired[list[AnalyticsBinKeyDict]]
    group_by_keys: NotRequired[list[AnalyticsSessionGroupByKeyDict]]
    metrics_results: NotRequired[list[AnalyticsSessionMetricResultDict]]
