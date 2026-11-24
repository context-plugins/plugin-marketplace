from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class TimeSeriesServiceStatisticsRequest(SdkBaseModel):
    start_time: RFC3339DateTime = Field(alias="StartTime")
    """The start of the time frame for which to aggregate statistics."""

    end_time: RFC3339DateTime = Field(alias="EndTime")
    """The end of the time frame for which to aggregate statistics."""

    group_name: Optional[str] = Field(default=UNSET, alias="GroupName")
    """The case-sensitive name of the group for which to pull statistics from."""

    group_arn: Optional[str] = Field(default=UNSET, alias="GroupARN")
    """The Amazon Resource Name (ARN) of the group for which to pull statistics from."""

    entity_selector_expression: Optional[str] = Field(default=UNSET, alias="EntitySelectorExpression")
    """A filter expression defining entities that will be aggregated for statistics. Supports ID, service, and edge
    functions. If no selector expression is specified, edge statistics are returned."""

    period: Optional[int] = Field(default=UNSET, alias="Period")
    """Aggregation period in seconds."""

    forecast_statistics: Optional[bool] = Field(default=UNSET, alias="ForecastStatistics")
    """The forecasted high and low fault count values. Forecast enabled requests require the EntitySelectorExpression ID
    be provided."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token."""


class TimeSeriesServiceStatisticsRequestDict(TypedDict):
    start_time: RFC3339DateTime
    end_time: RFC3339DateTime
    group_name: NotRequired[str]
    group_arn: NotRequired[str]
    entity_selector_expression: NotRequired[str]
    period: NotRequired[int]
    forecast_statistics: NotRequired[bool]
    next_token: NotRequired[str]
