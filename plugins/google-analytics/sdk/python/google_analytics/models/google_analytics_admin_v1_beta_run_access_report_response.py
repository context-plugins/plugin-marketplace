from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_access_dimension_header import (
    GoogleAnalyticsAdminV1BetaAccessDimensionHeader,
    GoogleAnalyticsAdminV1BetaAccessDimensionHeaderDict,
)
from .google_analytics_admin_v1_beta_access_metric_header import (
    GoogleAnalyticsAdminV1BetaAccessMetricHeader,
    GoogleAnalyticsAdminV1BetaAccessMetricHeaderDict,
)
from .google_analytics_admin_v1_beta_access_quota2 import (
    GoogleAnalyticsAdminV1BetaAccessQuota2,
    GoogleAnalyticsAdminV1BetaAccessQuota2Dict,
)
from .google_analytics_admin_v1_beta_access_row import (
    GoogleAnalyticsAdminV1BetaAccessRow,
    GoogleAnalyticsAdminV1BetaAccessRowDict,
)


class GoogleAnalyticsAdminV1BetaRunAccessReportResponse(SdkBaseModel):
    """The customized Data Access Record Report response."""

    quota: Optional[GoogleAnalyticsAdminV1BetaAccessQuota2] = UNSET
    """The quota state for this Analytics property including this request. This field doesn't work with account-level
    requests."""

    metric_headers: Optional[list[GoogleAnalyticsAdminV1BetaAccessMetricHeader]] = Field(
        default=UNSET, alias="metricHeaders"
    )
    """The header for a column in the report that corresponds to a specific metric. The number of MetricHeaders and
    ordering of MetricHeaders matches the metrics present in rows."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """The total number of rows in the query result. ``rowCount`` is independent of the number of rows returned in the
    response, the ``limit`` request parameter, and the ``offset`` request parameter. For example if a query returns 175
    rows and includes ``limit`` of 50 in the API request, the response will contain ``rowCount`` of 175 but only 50
    rows. To learn more about this pagination parameter, see `Pagination
    <https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination>`__."""

    dimension_headers: Optional[list[GoogleAnalyticsAdminV1BetaAccessDimensionHeader]] = Field(
        default=UNSET, alias="dimensionHeaders"
    )
    """The header for a column in the report that corresponds to a specific dimension. The number of DimensionHeaders
    and ordering of DimensionHeaders matches the dimensions present in rows."""

    rows: Optional[list[GoogleAnalyticsAdminV1BetaAccessRow]] = UNSET
    """Rows of dimension value combinations and metric values in the report."""


class GoogleAnalyticsAdminV1BetaRunAccessReportResponseDict(TypedDict):
    quota: NotRequired[GoogleAnalyticsAdminV1BetaAccessQuota2Dict]
    metric_headers: NotRequired[list[GoogleAnalyticsAdminV1BetaAccessMetricHeaderDict]]
    row_count: NotRequired[int]
    dimension_headers: NotRequired[list[GoogleAnalyticsAdminV1BetaAccessDimensionHeaderDict]]
    rows: NotRequired[list[GoogleAnalyticsAdminV1BetaAccessRowDict]]
