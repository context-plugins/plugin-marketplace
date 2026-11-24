from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .cohort_spec1 import CohortSpec1, CohortSpec1Dict
from .comparison import Comparison, ComparisonDict
from .date_range import DateRange, DateRangeDict
from .dimension import Dimension, DimensionDict
from .filter_expression2 import FilterExpression2, FilterExpression2Dict
from .filter_expression4 import FilterExpression4, FilterExpression4Dict
from .metric import Metric, MetricDict
from .pivot import Pivot, PivotDict


class RunPivotReportRequest(SdkBaseModel):
    """The request to generate a pivot report."""

    metric_filter: Optional[FilterExpression2] = Field(default=UNSET, alias="metricFilter")
    """The filter clause of metrics. Applied at post aggregation phase, similar to SQL having-clause. Metrics must be
    requested to be used in this filter. Dimensions cannot be used in this filter."""

    keep_empty_rows: Optional[bool] = Field(default=UNSET, alias="keepEmptyRows")
    """If false or unspecified, each row with all metrics equal to 0 will not be returned. If true, these rows will be
    returned if they are not separately removed by a filter. Regardless of this ``keep_empty_rows`` setting, only data
    recorded by the Google Analytics property can be displayed in a report. For example if a property never logs a
    ``purchase`` event, then a query for the ``eventName`` dimension and ``eventCount`` metric will not have a row
    eventName: "purchase" and eventCount: 0."""

    property: Optional[str] = UNSET
    """A Google Analytics property identifier whose events are tracked. Specified in the URL path and not the body. To
    learn more, see `where to find your Property ID
    <https://developers.google.com/analytics/devguides/reporting/data/v1/property-id>`__. Within a batch request, this
    property should either be unspecified or consistent with the batch-level property. Example: properties/1234"""

    pivots: Optional[list[Pivot]] = UNSET
    """Describes the visual format of the report's dimensions in columns or rows. The union of the fieldNames (dimension
    names) in all pivots must be a subset of dimension names defined in Dimensions. No two pivots can share a dimension.
    A dimension is only visible if it appears in a pivot."""

    comparisons: Optional[list[Comparison]] = UNSET
    """Optional. The configuration of comparisons requested and displayed. The request requires both a comparisons field
    and a comparisons dimension to receive a comparison column in the response."""

    cohort_spec: Optional[CohortSpec1] = Field(default=UNSET, alias="cohortSpec")
    """Cohort group associated with this request. If there is a cohort group in the request the 'cohort' dimension must
    be present."""

    return_property_quota: Optional[bool] = Field(default=UNSET, alias="returnPropertyQuota")
    """Toggles whether to return the current state of this Google Analytics property's quota. Quota is returned in
    `PropertyQuota <#PropertyQuota>`__."""

    currency_code: Optional[str] = Field(default=UNSET, alias="currencyCode")
    """A currency code in ISO4217 format, such as "AED", "USD", "JPY". If the field is empty, the report uses the
    property's default currency."""

    dimensions: Optional[list[Dimension]] = UNSET
    """The dimensions requested. All defined dimensions must be used by one of the following: dimension_expression,
    dimension_filter, pivots, order_bys."""

    metrics: Optional[list[Metric]] = UNSET
    """The metrics requested, at least one metric needs to be specified. All defined metrics must be used by one of the
    following: metric_expression, metric_filter, order_bys."""

    dimension_filter: Optional[FilterExpression4] = Field(default=UNSET, alias="dimensionFilter")
    """The filter clause of dimensions. Dimensions must be requested to be used in this filter. Metrics cannot be used
    in this filter."""

    date_ranges: Optional[list[DateRange]] = Field(default=UNSET, alias="dateRanges")
    """The date range to retrieve event data for the report. If multiple date ranges are specified, event data from each
    date range is used in the report. A special dimension with field name "dateRange" can be included in a Pivot's field
    names; if included, the report compares between date ranges. In a cohort request, this ``dateRanges`` must be
    unspecified."""


class RunPivotReportRequestDict(TypedDict):
    metric_filter: NotRequired[FilterExpression2Dict]
    keep_empty_rows: NotRequired[bool]
    property: NotRequired[str]
    pivots: NotRequired[list[PivotDict]]
    comparisons: NotRequired[list[ComparisonDict]]
    cohort_spec: NotRequired[CohortSpec1Dict]
    return_property_quota: NotRequired[bool]
    currency_code: NotRequired[str]
    dimensions: NotRequired[list[DimensionDict]]
    metrics: NotRequired[list[MetricDict]]
    dimension_filter: NotRequired[FilterExpression4Dict]
    date_ranges: NotRequired[list[DateRangeDict]]
