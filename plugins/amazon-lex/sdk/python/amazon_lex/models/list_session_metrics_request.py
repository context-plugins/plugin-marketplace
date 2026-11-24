from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .analytics_bin_by_specification import AnalyticsBinBySpecification, AnalyticsBinBySpecificationDict
from .analytics_session_filter import AnalyticsSessionFilter, AnalyticsSessionFilterDict
from .analytics_session_group_by_specification import (
    AnalyticsSessionGroupBySpecification,
    AnalyticsSessionGroupBySpecificationDict,
)
from .analytics_session_metric import AnalyticsSessionMetric, AnalyticsSessionMetricDict


class ListSessionMetricsRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier for the bot for which you want to retrieve session metrics."""

    start_date_time: RFC3339DateTime = Field(alias="startDateTime")
    """The date and time that marks the beginning of the range of time for which you want to see session metrics."""

    end_date_time: RFC3339DateTime = Field(alias="endDateTime")
    """The date and time that marks the end of the range of time for which you want to see session metrics."""

    metrics: list[AnalyticsSessionMetric]
    """A list of objects, each of which contains a metric you want to list, the statistic for the metric you want to
    return, and the method by which to organize the results."""

    bin_by: Optional[list[AnalyticsBinBySpecification]] = Field(default=UNSET, alias="binBy")
    """A list of objects, each of which contains specifications for organizing the results by time."""

    group_by: Optional[list[AnalyticsSessionGroupBySpecification]] = Field(default=UNSET, alias="groupBy")
    """A list of objects, each of which specifies how to group the results. You can group by the following criteria:
    ConversationEndState – The final state of the conversation. The possible end states are detailed in Key definitions
    in the user guide. LocaleId – The unique identifier of the bot locale."""

    filters: Optional[list[AnalyticsSessionFilter]] = UNSET
    """A list of objects, each of which describes a condition by which you want to filter the results."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of results to return in each page of results. If there are fewer results than the maximum page
    size, only the actual number of results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListSessionMetrics operation contains more results than specified in the maxResults
    parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a
    ListSessionMetrics request to return the next page of results. For a complete set of results, call the
    ListSessionMetrics operation until the nextToken returned in the response is null."""


class ListSessionMetricsRequestDict(TypedDict):
    bot_id: str
    start_date_time: RFC3339DateTime
    end_date_time: RFC3339DateTime
    metrics: list[AnalyticsSessionMetricDict]
    bin_by: NotRequired[list[AnalyticsBinBySpecificationDict]]
    group_by: NotRequired[list[AnalyticsSessionGroupBySpecificationDict]]
    filters: NotRequired[list[AnalyticsSessionFilterDict]]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
