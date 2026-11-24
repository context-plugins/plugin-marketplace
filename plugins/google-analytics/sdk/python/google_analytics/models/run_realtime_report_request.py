from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dimension import Dimension, DimensionDict
from .enums.metric_aggregation import MetricAggregationOrStr
from .filter_expression7 import FilterExpression7, FilterExpression7Dict
from .filter_expression8 import FilterExpression8, FilterExpression8Dict
from .metric import Metric, MetricDict
from .minute_range import MinuteRange, MinuteRangeDict
from .order_by import OrderBy, OrderByDict


class RunRealtimeReportRequest(SdkBaseModel):
    """The request to generate a realtime report."""

    order_bys: Optional[list[OrderBy]] = Field(default=UNSET, alias="orderBys")
    """Specifies how rows are ordered in the response."""

    minute_ranges: Optional[list[MinuteRange]] = Field(default=UNSET, alias="minuteRanges")
    """The minute ranges of event data to read. If unspecified, one minute range for the last 30 minutes will be used.
    If multiple minute ranges are requested, each response row will contain a zero based minute range index. If two
    minute ranges overlap, the event data for the overlapping minutes is included in the response rows for both minute
    ranges."""

    dimensions: Optional[list[Dimension]] = UNSET
    """The dimensions requested and displayed."""

    metric_aggregations: Optional[list[MetricAggregationOrStr]] = Field(default=UNSET, alias="metricAggregations")
    """Aggregation of metrics. Aggregated metric values will be shown in rows where the dimension_values are set to
    "RESERVED_(MetricAggregation)"."""

    metric_filter: Optional[FilterExpression7] = Field(default=UNSET, alias="metricFilter")
    """The filter clause of metrics. Applied at post aggregation phase, similar to SQL having-clause. Dimensions cannot
    be used in this filter."""

    limit: Optional[str] = UNSET
    """The number of rows to return. If unspecified, 10,000 rows are returned. The API returns a maximum of 250,000 rows
    per request, no matter how many you ask for. ``limit`` must be positive. The API can also return fewer rows than the
    requested ``limit``, if there aren't as many dimension values as the ``limit``. For instance, there are fewer than
    300 possible values for the dimension ``country``, so when reporting on only ``country``, you can't get more than
    300 rows, even if you set ``limit`` to a higher value."""

    dimension_filter: Optional[FilterExpression8] = Field(default=UNSET, alias="dimensionFilter")
    """The filter clause of dimensions. Metrics cannot be used in this filter."""

    metrics: Optional[list[Metric]] = UNSET
    """The metrics requested and displayed."""

    return_property_quota: Optional[bool] = Field(default=UNSET, alias="returnPropertyQuota")
    """Toggles whether to return the current state of this Google Analytics property's Realtime quota. Quota is returned
    in `PropertyQuota <#PropertyQuota>`__."""


class RunRealtimeReportRequestDict(TypedDict):
    order_bys: NotRequired[list[OrderByDict]]
    minute_ranges: NotRequired[list[MinuteRangeDict]]
    dimensions: NotRequired[list[DimensionDict]]
    metric_aggregations: NotRequired[list[MetricAggregationOrStr]]
    metric_filter: NotRequired[FilterExpression7Dict]
    limit: NotRequired[str]
    dimension_filter: NotRequired[FilterExpression8Dict]
    metrics: NotRequired[list[MetricDict]]
    return_property_quota: NotRequired[bool]
