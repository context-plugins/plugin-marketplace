from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaAccessMetricHeader(SdkBaseModel):
    """Describes a metric column in the report. Visible metrics requested in a report produce column entries within rows
    and MetricHeaders. However, metrics used exclusively within filters or expressions do not produce columns in a
    report; correspondingly, those metrics do not produce headers."""

    metric_name: Optional[str] = Field(default=UNSET, alias="metricName")
    """The metric's name; for example 'accessCount'."""


class GoogleAnalyticsAdminV1BetaAccessMetricHeaderDict(TypedDict):
    metric_name: NotRequired[str]
