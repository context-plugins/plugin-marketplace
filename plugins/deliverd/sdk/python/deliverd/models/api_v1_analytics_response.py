from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .inactive_report import InactiveReport, InactiveReportDict
from .top_report import TopReport, TopReportDict


class ApiV1AnalyticsResponse(SdkBaseModel):
    days: float
    total_views: float = Field(alias="totalViews")
    unique_viewers: float = Field(alias="uniqueViewers")
    active_reports: float = Field(alias="activeReports")
    externally_shared_reports: float = Field(alias="externallySharedReports")
    public_reports: float = Field(alias="publicReports")
    publishes_in_period: float = Field(alias="publishesInPeriod")
    top_reports: list[TopReport] = Field(alias="topReports")
    inactive_reports: list[InactiveReport] = Field(alias="inactiveReports")


class ApiV1AnalyticsResponseDict(TypedDict):
    days: float
    total_views: float
    unique_viewers: float
    active_reports: float
    externally_shared_reports: float
    public_reports: float
    publishes_in_period: float
    top_reports: list[TopReportDict]
    inactive_reports: list[InactiveReportDict]
