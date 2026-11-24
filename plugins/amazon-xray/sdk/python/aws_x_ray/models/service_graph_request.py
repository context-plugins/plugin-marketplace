from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel


class ServiceGraphRequest(SdkBaseModel):
    start_time: RFC3339DateTime = Field(alias="StartTime")
    """The start of the time frame for which to generate a graph."""

    end_time: RFC3339DateTime = Field(alias="EndTime")
    """The end of the timeframe for which to generate a graph."""

    group_name: Optional[str] = Field(default=UNSET, alias="GroupName")
    """The name of a group based on which you want to generate a graph."""

    group_arn: Optional[str] = Field(default=UNSET, alias="GroupARN")
    """The Amazon Resource Name (ARN) of a group based on which you want to generate a graph."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token."""


class ServiceGraphRequestDict(TypedDict):
    start_time: RFC3339DateTime
    end_time: RFC3339DateTime
    group_name: NotRequired[str]
    group_arn: NotRequired[str]
    next_token: NotRequired[str]
