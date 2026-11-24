from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .analytics_bin_key import AnalyticsBinKey, AnalyticsBinKeyDict
from .analytics_intent_group_by_key import AnalyticsIntentGroupByKey, AnalyticsIntentGroupByKeyDict
from .analytics_intent_metric_result import AnalyticsIntentMetricResult, AnalyticsIntentMetricResultDict


class AnalyticsIntentResult(SdkBaseModel):
    bin_keys: Optional[list[AnalyticsBinKey]] = Field(default=UNSET, alias="binKeys")
    """A list of objects containing the criteria you requested for binning results and the values of the bins."""

    group_by_keys: Optional[list[AnalyticsIntentGroupByKey]] = Field(default=UNSET, alias="groupByKeys")
    """A list of objects containing the criteria you requested for grouping results and the values of the groups."""

    metrics_results: Optional[list[AnalyticsIntentMetricResult]] = Field(default=UNSET, alias="metricsResults")
    """A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to
    return, and the method by which to organize the results."""


class AnalyticsIntentResultDict(TypedDict):
    bin_keys: NotRequired[list[AnalyticsBinKeyDict]]
    group_by_keys: NotRequired[list[AnalyticsIntentGroupByKeyDict]]
    metrics_results: NotRequired[list[AnalyticsIntentMetricResultDict]]
