from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cohort_spec1 import CohortSpec1, CohortSpec1Dict
from .comparison import Comparison, ComparisonDict
from .date_range import DateRange, DateRangeDict
from .dimension import Dimension, DimensionDict
from .enums.metric_aggregation import MetricAggregationOrStr
from .filter_expression5 import FilterExpression5, FilterExpression5Dict
from .filter_expression6 import FilterExpression6, FilterExpression6Dict
from .metric import Metric, MetricDict
from .order_by import OrderBy, OrderByDict


class RunReportRequest(SdkBaseModel):
    """The request to generate a report."""

    offset: Optional[str] = UNSET
    """The row count of the start row. The first row is counted as row 0. When paging, the first request does not
    specify offset; or equivalently, sets offset to 0; the first request returns the first ``limit`` of rows. The second
    request sets offset to the ``limit`` of the first request; the second request returns the second ``limit`` of rows.
    To learn more about this pagination parameter, see `Pagination
    <https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination>`__."""

    return_property_quota: Optional[bool] = Field(default=UNSET, alias="returnPropertyQuota")
    """Toggles whether to return the current state of this Google Analytics property's quota. Quota is returned in
    `PropertyQuota <#PropertyQuota>`__."""

    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    """A currency code in ISO4217 format, such as "AED", "USD", "JPY". If the field is empty, the report uses the
    property's default currency."""

    metric_aggregations: Optional[list[MetricAggregationOrStr]] = Field(default=UNSET, alias="metricAggregations")
    """Aggregation of metrics. Aggregated metric values will be shown in rows where the dimension_values are set to
    "RESERVED_(MetricAggregation)". Aggregates including both comparisons and multiple date ranges will be aggregated
    based on the date ranges."""

    cohort_spec: Optional[CohortSpec1] = Field(default=UNSET, alias="cohortSpec")
    """Cohort group associated with this request. If there is a cohort group in the request the 'cohort' dimension must
    be present."""

    dimension_filter: Optional[FilterExpression5] = Field(default=UNSET, alias="dimensionFilter")
    """Dimension filters let you ask for only specific dimension values in the report. To learn more, see `Fundamentals
    of Dimension Filters
    <https://developers.google.com/analytics/devguides/reporting/data/v1/basics#dimension_filters>`__ for examples.
    Metrics cannot be used in this filter."""

    keep_empty_rows: Optional[bool] = Field(default=UNSET, alias="keepEmptyRows")
    """If false or unspecified, each row with all metrics equal to 0 will not be returned. If true, these rows will be
    returned if they are not separately removed by a filter. Regardless of this ``keep_empty_rows`` setting, only data
    recorded by the Google Analytics property can be displayed in a report. For example if a property never logs a
    ``purchase`` event, then a query for the ``eventName`` dimension and ``eventCount`` metric will not have a row
    eventName: "purchase" and eventCount: 0."""

    metrics: Optional[list[Metric]] = UNSET
    """The metrics requested and displayed."""

    metric_filter: Optional[FilterExpression6] = Field(default=UNSET, alias="metricFilter")
    """The filter clause of metrics. Applied after aggregating the report's rows, similar to SQL having-clause.
    Dimensions cannot be used in this filter."""

    dimensions: Optional[list[Dimension]] = UNSET
    """The dimensions requested and displayed."""

    property: Optional[str] = UNSET
    """A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To
    learn more, see `where to find your Property ID
    <https://developers.google.com/analytics/devguides/reporting/data/v1/property-id>`__. Within a batch request, this
    property should either be unspecified or consistent with the batch-level property. Example: properties/1234"""

    limit: Optional[str] = UNSET
    """The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows
    per request, no matter how many you ask for. ``limit`` must be positive. The API can also return fewer rows than the
    requested ``limit``, if there aren't as many dimension values as the ``limit``. For instance, there are fewer than
    300 possible values for the dimension ``country``, so when reporting on only ``country``, you can't get more than
    300 rows, even if you set ``limit`` to a higher value. To learn more about this pagination parameter, see
    `Pagination <https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination>`__."""

    order_bys: Optional[list[OrderBy]] = Field(default=UNSET, alias="orderBys")
    """Specifies how rows are ordered in the response. Requests including both comparisons and multiple date ranges will
    have order bys applied on the comparisons."""

    comparisons: Optional[list[Comparison]] = UNSET
    """Optional. The configuration of comparisons requested and displayed. The request only requires a comparisons field
    in order to receive a comparison column in the response."""

    date_ranges: Optional[list[DateRange]] = Field(default=UNSET, alias="dateRanges")
    """Date ranges of data to read. If multiple date ranges are requested, each response row will contain a zero based
    date range index. If two date ranges overlap, the event data for the overlapping days is included in the response
    rows for both date ranges. In a cohort request, this ``dateRanges`` must be unspecified."""


class RunReportRequestDict(TypedDict):
    offset: NotRequired[str]
    return_property_quota: NotRequired[bool]
    currency_code: NotRequired[str]
    metric_aggregations: NotRequired[list[MetricAggregationOrStr]]
    cohort_spec: NotRequired[CohortSpec1Dict]
    dimension_filter: NotRequired[FilterExpression5Dict]
    keep_empty_rows: NotRequired[bool]
    metrics: NotRequired[list[MetricDict]]
    metric_filter: NotRequired[FilterExpression6Dict]
    dimensions: NotRequired[list[DimensionDict]]
    property: NotRequired[str]
    limit: NotRequired[str]
    order_bys: NotRequired[list[OrderByDict]]
    comparisons: NotRequired[list[ComparisonDict]]
    date_ranges: NotRequired[list[DateRangeDict]]
