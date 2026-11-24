from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .analytics_bin_by_specification import AnalyticsBinBySpecification, AnalyticsBinBySpecificationDict
from .analytics_intent_stage_filter import AnalyticsIntentStageFilter, AnalyticsIntentStageFilterDict
from .analytics_intent_stage_group_by_specification import (
    AnalyticsIntentStageGroupBySpecification,
    AnalyticsIntentStageGroupBySpecificationDict,
)
from .analytics_intent_stage_metric import AnalyticsIntentStageMetric, AnalyticsIntentStageMetricDict


class ListIntentStageMetricsRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier for the bot for which you want to retrieve intent stage metrics."""

    start_date_time: RFC3339DateTime = Field(alias="startDateTime")
    """The date and time that marks the beginning of the range of time for which you want to see intent stage
    metrics."""

    end_date_time: RFC3339DateTime = Field(alias="endDateTime")
    """The date and time that marks the end of the range of time for which you want to see intent stage metrics."""

    metrics: list[AnalyticsIntentStageMetric]
    """A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to
    return, and the method by which to organize the results."""

    bin_by: Optional[list[AnalyticsBinBySpecification]] = Field(default=UNSET, alias="binBy")
    """A list of objects, each of which contains specifications for organizing the results by time."""

    group_by: Optional[list[AnalyticsIntentStageGroupBySpecification]] = Field(default=UNSET, alias="groupBy")
    """A list of objects, each of which specifies how to group the results. You can group by the following criteria:
    IntentStageName – The name of the intent stage. SwitchedToIntent – The intent to which the conversation was switched
    (if any)."""

    filters: Optional[list[AnalyticsIntentStageFilter]] = UNSET
    """A list of objects, each of which describes a condition by which you want to filter the results."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of results to return in each page of results. If there are fewer results than the maximum page
    size, only the actual number of results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListIntentStageMetrics operation contains more results than specified in the maxResults
    parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a
    ListIntentStageMetrics request to return the next page of results. For a complete set of results, call the
    ListIntentStageMetrics operation until the nextToken returned in the response is null."""


class ListIntentStageMetricsRequestDict(TypedDict):
    bot_id: str
    start_date_time: RFC3339DateTime
    end_date_time: RFC3339DateTime
    metrics: list[AnalyticsIntentStageMetricDict]
    bin_by: NotRequired[list[AnalyticsBinBySpecificationDict]]
    group_by: NotRequired[list[AnalyticsIntentStageGroupBySpecificationDict]]
    filters: NotRequired[list[AnalyticsIntentStageFilterDict]]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
