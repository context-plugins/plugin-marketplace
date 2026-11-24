from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .money import Money, MoneyDict
from .widget_period import WidgetPeriod, WidgetPeriodDict


class WidgetMonetaryMetric(SdkBaseModel):
    """A monetary value over a period and its comparison with the equivalent prior period.
    ``monthToMonthGrowthPercentage`` and ``monthToMonthGrowthAmount`` are both ``null`` when no comparable prior-period
    value exists, such as when prior-period spend is zero."""

    value: Money
    """Current-period monetary value. ``amount`` is a decimal string and ``currency`` is an ISO 4217 code."""

    period: WidgetPeriod
    """UTC date-time range covered by the widget result. ``endTime`` is exclusive."""

    month_to_month_growth_percentage: float | None = Field(alias="monthToMonthGrowthPercentage")
    """Percentage change from the comparable prior period, or ``null`` when no comparison is available."""

    month_to_month_growth_amount: Money = Field(alias="monthToMonthGrowthAmount")
    """Absolute monetary change from the comparable prior period, or ``null`` when no comparison is available."""


class WidgetMonetaryMetricDict(TypedDict):
    value: MoneyDict
    period: WidgetPeriodDict
    month_to_month_growth_percentage: float | None
    month_to_month_growth_amount: MoneyDict
