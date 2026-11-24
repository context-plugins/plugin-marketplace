from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.metric_aggregation import MetricAggregationOrStr
from .order_by import OrderBy, OrderByDict


class Pivot(SdkBaseModel):
    """Describes the visible dimension columns and rows in the report response."""

    order_bys: Optional[list[OrderBy]] = Field(default=UNSET, alias="orderBys")
    """Specifies how dimensions are ordered in the pivot. In the first Pivot, the OrderBys determine Row and
    PivotDimensionHeader ordering; in subsequent Pivots, the OrderBys determine only PivotDimensionHeader ordering.
    Dimensions specified in these OrderBys must be a subset of Pivot.field_names."""

    metric_aggregations: Optional[list[MetricAggregationOrStr]] = Field(default=UNSET, alias="metricAggregations")
    """Aggregate the metrics by dimensions in this pivot using the specified metric_aggregations."""

    field_names: Optional[list[str]] = Field(default=UNSET, alias="fieldNames")
    """Dimension names for visible columns in the report response. Including "dateRange" produces a date range column;
    for each row in the response, dimension values in the date range column will indicate the corresponding date range
    from the request."""

    limit: Optional[str] = UNSET
    """The number of unique combinations of dimension values to return in this pivot. The ``limit`` parameter is
    required. A ``limit`` of 10,000 is common for single pivot requests. The product of the ``limit`` for each ``pivot``
    in a ``RunPivotReportRequest`` must not exceed 250,000. For example, a two pivot request with ``limit: 1000`` in
    each pivot will fail because the product is ``1,000,000``."""

    offset: Optional[str] = UNSET
    """The row count of the start row. The first row is counted as row 0."""


class PivotDict(TypedDict):
    order_bys: NotRequired[list[OrderByDict]]
    metric_aggregations: NotRequired[list[MetricAggregationOrStr]]
    field_names: NotRequired[list[str]]
    limit: NotRequired[str]
    offset: NotRequired[str]
