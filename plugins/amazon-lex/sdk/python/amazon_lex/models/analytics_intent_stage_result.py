from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .analytics_bin_key import AnalyticsBinKey, AnalyticsBinKeyDict
from .analytics_intent_stage_group_by_key import AnalyticsIntentStageGroupByKey, AnalyticsIntentStageGroupByKeyDict
from .analytics_intent_stage_metric_result import AnalyticsIntentStageMetricResult, AnalyticsIntentStageMetricResultDict


class AnalyticsIntentStageResult(SdkBaseModel):
    bin_keys: Optional[list[AnalyticsBinKey]] = Field(default=UNSET, alias="binKeys")
    """A list of objects containing the criteria you requested for binning results and the values of the bins."""

    group_by_keys: Optional[list[AnalyticsIntentStageGroupByKey]] = Field(default=UNSET, alias="groupByKeys")
    """A list of objects containing the criteria you requested for grouping results and the values of the bins."""

    metrics_results: Optional[list[AnalyticsIntentStageMetricResult]] = Field(default=UNSET, alias="metricsResults")
    """A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to
    return, and the method by which to organize the results."""


class AnalyticsIntentStageResultDict(TypedDict):
    bin_keys: NotRequired[list[AnalyticsBinKeyDict]]
    group_by_keys: NotRequired[list[AnalyticsIntentStageGroupByKeyDict]]
    metrics_results: NotRequired[list[AnalyticsIntentStageMetricResultDict]]
