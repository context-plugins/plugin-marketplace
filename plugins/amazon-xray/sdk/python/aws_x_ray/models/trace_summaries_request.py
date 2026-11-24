from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.time_range_type import TimeRangeTypeOrStr
from .sampling_strategy import SamplingStrategy, SamplingStrategyDict


class TraceSummariesRequest(SdkBaseModel):
    start_time: RFC3339DateTime = Field(alias="StartTime")
    """The start of the time frame for which to retrieve traces."""

    end_time: RFC3339DateTime = Field(alias="EndTime")
    """The end of the time frame for which to retrieve traces."""

    time_range_type: Optional[TimeRangeTypeOrStr] = Field(default=UNSET, alias="TimeRangeType")
    """Query trace summaries by TraceId (trace start time), Event (trace update time), or Service (trace segment end
    time)."""

    sampling: Optional[bool] = Field(default=UNSET, alias="Sampling")
    """Set to true to get summaries for only a subset of available traces."""

    sampling_strategy: Optional[SamplingStrategy] = Field(default=UNSET, alias="SamplingStrategy")
    filter_expression: Optional[str] = Field(default=UNSET, alias="FilterExpression")
    """Specify a filter expression to retrieve trace summaries for services or requests that meet certain
    requirements."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Specify the pagination token returned by a previous request to retrieve the next page of results."""


class TraceSummariesRequestDict(TypedDict):
    start_time: RFC3339DateTime
    end_time: RFC3339DateTime
    time_range_type: NotRequired[TimeRangeTypeOrStr]
    sampling: NotRequired[bool]
    sampling_strategy: NotRequired[SamplingStrategyDict]
    filter_expression: NotRequired[str]
    next_token: NotRequired[str]
