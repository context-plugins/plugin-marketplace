from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.mode1 import Mode1, Mode1OrStr
from .external_forecast_date_range import ExternalForecastDateRange, ExternalForecastDateRangeDict


class ExternalForecastSettings(SdkBaseModel):
    """Settings for cost forecasting on the report. Historical fields choose which past data the model learns from.
    Future fields choose how far ahead predicted costs are projected. When a custom date range is set for a side, it
    takes precedence over the corresponding interval count. futureCustomDateRange is converted to futureTimeIntervals
    using the report timeInterval. Providing forecastSettings enables forecast (advancedAnalysis.forecast)
    automatically. On PATCH, omit forecastSettings to leave forecasting unchanged; send forecastSettings: null to
    clear/disable forecasting (also removes the forecast feature flag). An empty object enables forecast with default
    mode totals. Interval counts outside the allowed min/max for the report timeInterval are rejected with a validation
    error that includes the allowed range."""

    mode: Mode1OrStr = Mode1.TOTALS
    """Forecast granularity mode."""

    historical_time_intervals: Optional[int] = Field(default=UNSET, alias="historicalTimeIntervals")
    """How many past timeInterval periods of data the model learns from. Allowed ranges by timeInterval: hour 2-1000,
    day 2-500, week 2-100, month 2-36, quarter 2-12, year 2-6."""

    future_time_intervals: Optional[int] = Field(default=UNSET, alias="futureTimeIntervals")
    """How many future timeInterval periods of predicted costs to project. Allowed ranges by timeInterval: hour 1-1000,
    day 1-100, week 1-52, month 1-12, quarter 1-4, year 1-3."""

    historical_custom_date_range: Optional[ExternalForecastDateRange] = Field(
        default=UNSET, alias="historicalCustomDateRange"
    )
    """Past date range of billed data the model learns from. Takes precedence over historicalTimeIntervals."""

    future_custom_date_range: Optional[ExternalForecastDateRange] = Field(default=UNSET, alias="futureCustomDateRange")
    """Date range for how far ahead to project predicted costs. Takes precedence over futureTimeIntervals. The range
    must resolve to a futureTimeIntervals count within the allowed min/max for the report timeInterval."""


class ExternalForecastSettingsDict(TypedDict):
    mode: NotRequired[Mode1OrStr]
    historical_time_intervals: NotRequired[int]
    future_time_intervals: NotRequired[int]
    historical_custom_date_range: NotRequired[ExternalForecastDateRangeDict]
    future_custom_date_range: NotRequired[ExternalForecastDateRangeDict]
