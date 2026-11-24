from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .report_group_trend_stats import ReportGroupTrendStats, ReportGroupTrendStatsDict
from .report_with_raw_data import ReportWithRawData, ReportWithRawDataDict


class GetReportGroupTrendOutput(SdkBaseModel):
    stats: Optional[ReportGroupTrendStats] = UNSET
    raw_data: Optional[list[ReportWithRawData]] = Field(default=UNSET, alias="rawData")
    """An array that contains the raw data for each report."""


class GetReportGroupTrendOutputDict(TypedDict):
    stats: NotRequired[ReportGroupTrendStatsDict]
    raw_data: NotRequired[list[ReportWithRawDataDict]]
