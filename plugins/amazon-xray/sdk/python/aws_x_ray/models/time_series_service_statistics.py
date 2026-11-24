from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .edge_statistics import EdgeStatistics, EdgeStatisticsDict
from .forecast_statistics import ForecastStatistics, ForecastStatisticsDict
from .histogram_entry import HistogramEntry, HistogramEntryDict
from .service_statistics import ServiceStatistics, ServiceStatisticsDict


class TimeSeriesServiceStatistics(SdkBaseModel):
    timestamp: Optional[RFC3339DateTime] = Field(default=UNSET, alias="Timestamp")
    """Timestamp of the window for which statistics are aggregated."""

    edge_summary_statistics: Optional[EdgeStatistics] = Field(default=UNSET, alias="EdgeSummaryStatistics")
    service_summary_statistics: Optional[ServiceStatistics] = Field(default=UNSET, alias="ServiceSummaryStatistics")
    service_forecast_statistics: Optional[ForecastStatistics] = Field(default=UNSET, alias="ServiceForecastStatistics")
    response_time_histogram: Optional[list[HistogramEntry]] = Field(default=UNSET, alias="ResponseTimeHistogram")
    """The response time histogram for the selected entities."""


class TimeSeriesServiceStatisticsDict(TypedDict):
    timestamp: NotRequired[RFC3339DateTime]
    edge_summary_statistics: NotRequired[EdgeStatisticsDict]
    service_summary_statistics: NotRequired[ServiceStatisticsDict]
    service_forecast_statistics: NotRequired[ForecastStatisticsDict]
    response_time_histogram: NotRequired[list[HistogramEntryDict]]
