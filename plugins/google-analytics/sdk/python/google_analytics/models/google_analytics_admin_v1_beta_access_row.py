from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_access_dimension_value import (
    GoogleAnalyticsAdminV1BetaAccessDimensionValue,
    GoogleAnalyticsAdminV1BetaAccessDimensionValueDict,
)
from .google_analytics_admin_v1_beta_access_metric_value import (
    GoogleAnalyticsAdminV1BetaAccessMetricValue,
    GoogleAnalyticsAdminV1BetaAccessMetricValueDict,
)


class GoogleAnalyticsAdminV1BetaAccessRow(SdkBaseModel):
    """Access report data for each row."""

    metric_values: Optional[list[GoogleAnalyticsAdminV1BetaAccessMetricValue]] = Field(
        default=UNSET, alias="metricValues"
    )
    """List of metric values. These values are in the same order as specified in the request."""

    dimension_values: Optional[list[GoogleAnalyticsAdminV1BetaAccessDimensionValue]] = Field(
        default=UNSET, alias="dimensionValues"
    )
    """List of dimension values. These values are in the same order as specified in the request."""


class GoogleAnalyticsAdminV1BetaAccessRowDict(TypedDict):
    metric_values: NotRequired[list[GoogleAnalyticsAdminV1BetaAccessMetricValueDict]]
    dimension_values: NotRequired[list[GoogleAnalyticsAdminV1BetaAccessDimensionValueDict]]
