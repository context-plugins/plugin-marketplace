from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_custom_metric import (
    GoogleAnalyticsAdminV1BetaCustomMetric,
    GoogleAnalyticsAdminV1BetaCustomMetricDict,
)


class GoogleAnalyticsAdminV1BetaListCustomMetricsResponse(SdkBaseModel):
    """Response message for ListCustomMetrics RPC."""

    custom_metrics: Optional[list[GoogleAnalyticsAdminV1BetaCustomMetric]] = Field(default=UNSET, alias="customMetrics")
    """List of CustomMetrics."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleAnalyticsAdminV1BetaListCustomMetricsResponseDict(TypedDict):
    custom_metrics: NotRequired[list[GoogleAnalyticsAdminV1BetaCustomMetricDict]]
    next_page_token: NotRequired[str]
