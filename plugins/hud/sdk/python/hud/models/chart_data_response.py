from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .job_chart_data_point import JobChartDataPoint, JobChartDataPointDict


class ChartDataResponse(SdkBaseModel):
    data_points: Optional[list[JobChartDataPoint]] = UNSET
    total: int = 0


class ChartDataResponseDict(TypedDict):
    data_points: NotRequired[list[JobChartDataPointDict]]
    total: NotRequired[int]
