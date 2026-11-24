from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .time_series_service_statistics import TimeSeriesServiceStatistics, TimeSeriesServiceStatisticsDict


class GetTimeSeriesServiceStatisticsResult(SdkBaseModel):
    time_series_service_statistics: Optional[list[TimeSeriesServiceStatistics]] = Field(
        default=UNSET, alias="TimeSeriesServiceStatistics"
    )
    """The collection of statistics."""

    contains_old_group_versions: Optional[bool] = Field(default=UNSET, alias="ContainsOldGroupVersions")
    """A flag indicating whether or not a group's filter expression has been consistent, or if a returned aggregation
    might show statistics from an older version of the group's filter expression."""

    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token."""


class GetTimeSeriesServiceStatisticsResultDict(TypedDict):
    time_series_service_statistics: NotRequired[list[TimeSeriesServiceStatisticsDict]]
    contains_old_group_versions: NotRequired[bool]
    next_token: NotRequired[str]
