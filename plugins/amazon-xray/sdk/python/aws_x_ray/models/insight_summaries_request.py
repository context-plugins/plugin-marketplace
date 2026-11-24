from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.state1 import State1OrStr


class InsightSummariesRequest(SdkBaseModel):
    states: Optional[list[State1OrStr]] = Field(default=UNSET, alias="States")
    """The list of insight states."""

    group_arn: Optional[str] = Field(default=UNSET, alias="GroupARN")
    """The Amazon Resource Name (ARN) of the group. Required if the GroupName isn't provided."""

    group_name: Optional[str] = Field(default=UNSET, alias="GroupName")
    """The name of the group. Required if the GroupARN isn't provided."""

    start_time: RFC3339DateTime = Field(alias="StartTime")
    """The beginning of the time frame in which the insights started. The start time can't be more than 30 days old."""

    end_time: RFC3339DateTime = Field(alias="EndTime")
    """The end of the time frame in which the insights ended. The end time can't be more than 30 days old."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """The maximum number of results to display."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token."""


class InsightSummariesRequestDict(TypedDict):
    states: NotRequired[list[State1OrStr]]
    group_arn: NotRequired[str]
    group_name: NotRequired[str]
    start_time: RFC3339DateTime
    end_time: RFC3339DateTime
    max_results: NotRequired[int]
    next_token: NotRequired[str]
