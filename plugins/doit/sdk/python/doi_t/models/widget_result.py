from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .widget_monetary_metric import WidgetMonetaryMetric, WidgetMonetaryMetricDict


class WidgetResult(SdkBaseModel):
    """Computed widget result. The populated property corresponds to ``kind``."""

    monetary_metric: WidgetMonetaryMetric = Field(alias="monetaryMetric")
    """A monetary value over a period and its comparison with the equivalent prior period.
    ``monthToMonthGrowthPercentage`` and ``monthToMonthGrowthAmount`` are both ``null`` when no comparable prior-period
    value exists, such as when prior-period spend is zero."""


class WidgetResultDict(TypedDict):
    monetary_metric: WidgetMonetaryMetricDict
