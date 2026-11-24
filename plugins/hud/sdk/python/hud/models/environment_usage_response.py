from __future__ import annotations

from uuid import UUID

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .environment_usage_chart_point import EnvironmentUsageChartPoint, EnvironmentUsageChartPointDict
from .environment_usage_row import EnvironmentUsageRow, EnvironmentUsageRowDict
from .environment_usage_summary import EnvironmentUsageSummary, EnvironmentUsageSummaryDict


class EnvironmentUsageResponse(SdkBaseModel):
    summary: EnvironmentUsageSummary
    chart: list[EnvironmentUsageChartPoint]
    environments: list[EnvironmentUsageRow]
    team_id: UUID


class EnvironmentUsageResponseDict(TypedDict):
    summary: EnvironmentUsageSummaryDict
    chart: list[EnvironmentUsageChartPointDict]
    environments: list[EnvironmentUsageRowDict]
    team_id: UUID
