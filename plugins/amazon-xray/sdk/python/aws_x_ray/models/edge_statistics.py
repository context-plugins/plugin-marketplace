from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .error_statistics import ErrorStatistics, ErrorStatisticsDict
from .fault_statistics import FaultStatistics, FaultStatisticsDict


class EdgeStatistics(SdkBaseModel):
    ok_count: Optional[int] = Field(default=UNSET, alias="OkCount")
    """The number of requests that completed with a 2xx Success status code."""

    error_statistics: Optional[ErrorStatistics] = Field(default=UNSET, alias="ErrorStatistics")
    fault_statistics: Optional[FaultStatistics] = Field(default=UNSET, alias="FaultStatistics")
    total_count: Optional[int] = Field(default=UNSET, alias="TotalCount")
    """The total number of completed requests."""

    total_response_time: Optional[float] = Field(default=UNSET, alias="TotalResponseTime")
    """The aggregate response time of completed requests."""


class EdgeStatisticsDict(TypedDict):
    ok_count: NotRequired[int]
    error_statistics: NotRequired[ErrorStatisticsDict]
    fault_statistics: NotRequired[FaultStatisticsDict]
    total_count: NotRequired[int]
    total_response_time: NotRequired[float]
