from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .analytics_bin_key import AnalyticsBinKey, AnalyticsBinKeyDict
from .analytics_utterance_attribute_result import (
    AnalyticsUtteranceAttributeResult,
    AnalyticsUtteranceAttributeResultDict,
)
from .analytics_utterance_group_by_key import AnalyticsUtteranceGroupByKey, AnalyticsUtteranceGroupByKeyDict
from .analytics_utterance_metric_result import AnalyticsUtteranceMetricResult, AnalyticsUtteranceMetricResultDict


class AnalyticsUtteranceResult(SdkBaseModel):
    bin_keys: Optional[list[AnalyticsBinKey]] = Field(default=UNSET, alias="binKeys")
    """A list of objects containing the criteria you requested for binning results and the values of the bins."""

    group_by_keys: Optional[list[AnalyticsUtteranceGroupByKey]] = Field(default=UNSET, alias="groupByKeys")
    """A list of objects containing the criteria you requested for grouping results and the values of the bins."""

    metrics_results: Optional[list[AnalyticsUtteranceMetricResult]] = Field(default=UNSET, alias="metricsResults")
    """A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to
    return, and the method by which to organize the results."""

    attribute_results: Optional[list[AnalyticsUtteranceAttributeResult]] = Field(
        default=UNSET, alias="attributeResults"
    )
    """A list of objects containing information about the last used intent at the time of an utterance."""


class AnalyticsUtteranceResultDict(TypedDict):
    bin_keys: NotRequired[list[AnalyticsBinKeyDict]]
    group_by_keys: NotRequired[list[AnalyticsUtteranceGroupByKeyDict]]
    metrics_results: NotRequired[list[AnalyticsUtteranceMetricResultDict]]
    attribute_results: NotRequired[list[AnalyticsUtteranceAttributeResultDict]]
