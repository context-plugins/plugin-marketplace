from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .analytics_path_filter import AnalyticsPathFilter, AnalyticsPathFilterDict


class ListIntentPathsRequest(SdkBaseModel):
    bot_id: str = Field(alias="botId")
    """The identifier for the bot for which you want to retrieve intent path metrics."""

    start_date_time: RFC3339DateTime = Field(alias="startDateTime")
    """The date and time that marks the beginning of the range of time for which you want to see intent path metrics."""

    end_date_time: RFC3339DateTime = Field(alias="endDateTime")
    """The date and time that marks the end of the range of time for which you want to see intent path metrics."""

    intent_path: str = Field(alias="intentPath")
    """The intent path for which you want to retrieve metrics. Use a forward slash to separate intents in the path. For
    example: /BookCar /BookCar/BookHotel /BookHotel/BookCar"""

    filters: Optional[list[AnalyticsPathFilter]] = UNSET
    """A list of objects, each describes a condition by which you want to filter the results."""


class ListIntentPathsRequestDict(TypedDict):
    bot_id: str
    start_date_time: RFC3339DateTime
    end_date_time: RFC3339DateTime
    intent_path: str
    filters: NotRequired[list[AnalyticsPathFilterDict]]
