from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GoogleAnalyticsAdminV1BetaAccessMetric(SdkBaseModel):
    """The quantitative measurements of a report. For example, the metric ``accessCount`` is the total number of data
    access records."""

    metric_name: Optional[str] = Field(default=UNSET, alias="metricName")
    """The API name of the metric. See `Data Access Schema
    <https://developers.google.com/analytics/devguides/config/admin/v1/access-api-schema>`__ for the list of metrics
    supported in this API. Metrics are referenced by name in ``metricFilter`` & ``orderBys``."""


class GoogleAnalyticsAdminV1BetaAccessMetricDict(TypedDict):
    metric_name: NotRequired[str]
