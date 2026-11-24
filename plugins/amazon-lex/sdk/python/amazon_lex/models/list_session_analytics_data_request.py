from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .analytics_session_filter import AnalyticsSessionFilter, AnalyticsSessionFilterDict
from .session_data_sort_by import SessionDataSortBy, SessionDataSortByDict


class ListSessionAnalyticsDataRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier for the bot for which you want to retrieve session analytics."""

    start_date_time: RFC3339DateTime = Field(alias="startDateTime")
    """The date and time that marks the beginning of the range of time for which you want to see session analytics."""

    end_date_time: RFC3339DateTime = Field(alias="endDateTime")
    """The date and time that marks the end of the range of time for which you want to see session analytics."""

    sort_by: Optional[SessionDataSortBy] = Field(default=UNSET, alias="sortBy")
    filters: Optional[list[AnalyticsSessionFilter]] = UNSET
    """A list of objects, each of which describes a condition by which you want to filter the results."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of results to return in each page of results. If there are fewer results than the maximum page
    size, only the actual number of results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListSessionAnalyticsData operation contains more results than specified in the
    maxResults parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a
    ListSessionAnalyticsData request to return the next page of results. For a complete set of results, call the
    ListSessionAnalyticsData operation until the nextToken returned in the response is null."""


class ListSessionAnalyticsDataRequestDict(TypedDict):
    bot_id: str
    start_date_time: RFC3339DateTime
    end_date_time: RFC3339DateTime
    sort_by: NotRequired[SessionDataSortByDict]
    filters: NotRequired[list[AnalyticsSessionFilterDict]]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
