from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .by_day import ByDay, ByDayDict
from .by_version import ByVersion, ByVersionDict
from .recent_viewer import RecentViewer, RecentViewerDict


class ApiV1ReportsAnalyticsResponse(SdkBaseModel):
    report_id: str = Field(alias="reportId")
    title: str
    total_views: float = Field(alias="totalViews")
    unique_viewers: float | None = Field(alias="uniqueViewers")
    internal_viewers: float | None = Field(alias="internalViewers")
    external_viewers: float | None = Field(alias="externalViewers")
    first_viewed_at: str | None = Field(alias="firstViewedAt")
    last_viewed_at: str | None = Field(alias="lastViewedAt")
    by_day: list[ByDay] = Field(alias="byDay")
    by_version: list[ByVersion] = Field(alias="byVersion")
    recent_viewers: list[RecentViewer] = Field(alias="recentViewers")


class ApiV1ReportsAnalyticsResponseDict(TypedDict):
    report_id: str
    title: str
    total_views: float
    unique_viewers: float | None
    internal_viewers: float | None
    external_viewers: float | None
    first_viewed_at: str | None
    last_viewed_at: str | None
    by_day: list[ByDayDict]
    by_version: list[ByVersionDict]
    recent_viewers: list[RecentViewerDict]
