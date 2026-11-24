from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .analytics_utterance_filter import AnalyticsUtteranceFilter, AnalyticsUtteranceFilterDict
from .utterance_data_sort_by import UtteranceDataSortBy, UtteranceDataSortByDict


class ListUtteranceAnalyticsDataRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier for the bot for which you want to retrieve utterance analytics."""

    start_date_time: RFC3339DateTime = Field(alias="startDateTime")
    """The date and time that marks the beginning of the range of time for which you want to see utterance analytics."""

    end_date_time: RFC3339DateTime = Field(alias="endDateTime")
    """The date and time that marks the end of the range of time for which you want to see utterance analytics."""

    sort_by: Optional[UtteranceDataSortBy] = Field(default=UNSET, alias="sortBy")
    filters: Optional[list[AnalyticsUtteranceFilter]] = UNSET
    """A list of objects, each of which describes a condition by which you want to filter the results."""

    max_results: Optional[int] = Field(default=UNSET, alias="maxResults")
    """The maximum number of results to return in each page of results. If there are fewer results than the maximum page
    size, only the actual number of results are returned."""

    next_token: Optional[str] = Field(default=UNSET, alias="nextToken")
    """If the response from the ListUtteranceAnalyticsData operation contains more results than specified in the
    maxResults parameter, a token is returned in the response. Use the returned token in the nextToken parameter of a
    ListUtteranceAnalyticsData request to return the next page of results. For a complete set of results, call the
    ListUtteranceAnalyticsData operation until the nextToken returned in the response is null."""


class ListUtteranceAnalyticsDataRequestDict(TypedDict):
    bot_id: str
    start_date_time: RFC3339DateTime
    end_date_time: RFC3339DateTime
    sort_by: NotRequired[UtteranceDataSortByDict]
    filters: NotRequired[list[AnalyticsUtteranceFilterDict]]
    max_results: NotRequired[int]
    next_token: NotRequired[str]
