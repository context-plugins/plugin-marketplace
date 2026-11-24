from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_analytics_admin_v1_beta_access_date_range import (
    GoogleAnalyticsAdminV1BetaAccessDateRange,
    GoogleAnalyticsAdminV1BetaAccessDateRangeDict,
)
from .google_analytics_admin_v1_beta_access_dimension import (
    GoogleAnalyticsAdminV1BetaAccessDimension,
    GoogleAnalyticsAdminV1BetaAccessDimensionDict,
)
from .google_analytics_admin_v1_beta_access_filter_expression3 import (
    GoogleAnalyticsAdminV1BetaAccessFilterExpression3,
    GoogleAnalyticsAdminV1BetaAccessFilterExpression3Dict,
)
from .google_analytics_admin_v1_beta_access_filter_expression4 import (
    GoogleAnalyticsAdminV1BetaAccessFilterExpression4,
    GoogleAnalyticsAdminV1BetaAccessFilterExpression4Dict,
)
from .google_analytics_admin_v1_beta_access_metric import (
    GoogleAnalyticsAdminV1BetaAccessMetric,
    GoogleAnalyticsAdminV1BetaAccessMetricDict,
)
from .google_analytics_admin_v1_beta_access_order_by import (
    GoogleAnalyticsAdminV1BetaAccessOrderBy,
    GoogleAnalyticsAdminV1BetaAccessOrderByDict,
)


class GoogleAnalyticsAdminV1BetaRunAccessReportRequest(SdkBaseModel):
    """The request for a Data Access Record Report."""

    time_zone: Optional[str] = Field(default=UNSET, alias="timeZone")
    """This request's time zone if specified. If unspecified, the property's time zone is used. The request's time zone
    is used to interpret the start & end dates of the report. Formatted as strings from the IANA Time Zone database
    (https://www.iana.org/time-zones); for example "America/New_York" or "Asia/Tokyo"."""

    limit: Optional[str] = UNSET
    """The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 100,000 rows
    per request, no matter how many you ask for. ``limit`` must be positive. The API may return fewer rows than the
    requested ``limit``, if there aren't as many remaining rows as the ``limit``. For instance, there are fewer than 300
    possible values for the dimension ``country``, so when reporting on only ``country``, you can't get more than 300
    rows, even if you set ``limit`` to a higher value. To learn more about this pagination parameter, see `Pagination
    <https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination>`__."""

    return_entity_quota: Optional[bool] = Field(default=UNSET, alias="returnEntityQuota")
    """Toggles whether to return the current state of this Analytics Property's quota. Quota is returned in `AccessQuota
    <#AccessQuota>`__. For account-level requests, this field must be false."""

    expand_groups: Optional[bool] = Field(default=UNSET, alias="expandGroups")
    """Optional. Decides whether to return the users within user groups. This field works only when include_all_users is
    set to true. If true, it will return all users with access to the specified property or account. If false, only the
    users with direct access will be returned."""

    include_all_users: Optional[bool] = Field(default=UNSET, alias="includeAllUsers")
    """Optional. Determines whether to include users who have never made an API call in the response. If true, all users
    with access to the specified property or account are included in the response, regardless of whether they have made
    an API call or not. If false, only the users who have made an API call will be included."""

    dimensions: Optional[list[GoogleAnalyticsAdminV1BetaAccessDimension]] = UNSET
    """The dimensions requested and displayed in the response. Requests are allowed up to 9 dimensions."""

    order_bys: Optional[list[GoogleAnalyticsAdminV1BetaAccessOrderBy]] = Field(default=UNSET, alias="orderBys")
    """Specifies how rows are ordered in the response."""

    date_ranges: Optional[list[GoogleAnalyticsAdminV1BetaAccessDateRange]] = Field(default=UNSET, alias="dateRanges")
    """Date ranges of access records to read. If multiple date ranges are requested, each response row will contain a
    zero based date range index. If two date ranges overlap, the access records for the overlapping days is included in
    the response rows for both date ranges. Requests are allowed up to 2 date ranges."""

    metrics: Optional[list[GoogleAnalyticsAdminV1BetaAccessMetric]] = UNSET
    """The metrics requested and displayed in the response. Requests are allowed up to 10 metrics."""

    metric_filter: Optional[GoogleAnalyticsAdminV1BetaAccessFilterExpression4] = Field(
        default=UNSET, alias="metricFilter"
    )
    """Metric filters allow you to restrict report response to specific metric values which match the filter. Metric
    filters are applied after aggregating the report's rows, similar to SQL having-clause. Dimensions cannot be used in
    this filter."""

    dimension_filter: Optional[GoogleAnalyticsAdminV1BetaAccessFilterExpression3] = Field(
        default=UNSET, alias="dimensionFilter"
    )
    """Dimension filters let you restrict report response to specific dimension values which match the filter. For
    example, filtering on access records of a single user. To learn more, see `Fundamentals of Dimension Filters
    <https://developers.google.com/analytics/devguides/reporting/data/v1/basics#dimension_filters>`__ for examples.
    Metrics cannot be used in this filter."""

    offset: Optional[str] = UNSET
    """The row count of the start row. The first row is counted as row 0. If offset is unspecified, it is treated as 0.
    If offset is zero, then this method will return the first page of results with ``limit`` entries. To learn more
    about this pagination parameter, see `Pagination
    <https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination>`__."""


class GoogleAnalyticsAdminV1BetaRunAccessReportRequestDict(TypedDict):
    time_zone: NotRequired[str]
    limit: NotRequired[str]
    return_entity_quota: NotRequired[bool]
    expand_groups: NotRequired[bool]
    include_all_users: NotRequired[bool]
    dimensions: NotRequired[list[GoogleAnalyticsAdminV1BetaAccessDimensionDict]]
    order_bys: NotRequired[list[GoogleAnalyticsAdminV1BetaAccessOrderByDict]]
    date_ranges: NotRequired[list[GoogleAnalyticsAdminV1BetaAccessDateRangeDict]]
    metrics: NotRequired[list[GoogleAnalyticsAdminV1BetaAccessMetricDict]]
    metric_filter: NotRequired[GoogleAnalyticsAdminV1BetaAccessFilterExpression4Dict]
    dimension_filter: NotRequired[GoogleAnalyticsAdminV1BetaAccessFilterExpression3Dict]
    offset: NotRequired[str]
