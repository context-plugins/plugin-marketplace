from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dimension_header import DimensionHeader, DimensionHeaderDict
from .metric_header import MetricHeader, MetricHeaderDict
from .property_quota3 import PropertyQuota3, PropertyQuota3Dict
from .row import Row, RowDict


class RunRealtimeReportResponse(SdkBaseModel):
    """The response realtime report table corresponding to a request."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """The total number of rows in the query result. ``rowCount`` is independent of the number of rows returned in the
    response and the ``limit`` request parameter. For example if a query returns 175 rows and includes ``limit`` of 50
    in the API request, the response will contain ``rowCount`` of 175 but only 50 rows."""

    kind: Optional[str] = UNSET
    """Identifies what kind of resource this message is. This ``kind`` is always the fixed string
    "analyticsData#runRealtimeReport". Useful to distinguish between response types in JSON."""

    totals: Optional[list[Row]] = UNSET
    """If requested, the totaled values of metrics."""

    property_quota: Optional[PropertyQuota3] = Field(default=UNSET, alias="propertyQuota")
    """This Google Analytics property's Realtime quota state including this request."""

    metric_headers: Optional[list[MetricHeader]] = Field(default=UNSET, alias="metricHeaders")
    """Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present
    in rows."""

    dimension_headers: Optional[list[DimensionHeader]] = Field(default=UNSET, alias="dimensionHeaders")
    """Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the
    dimensions present in rows."""

    rows: Optional[list[Row]] = UNSET
    """Rows of dimension value combinations and metric values in the report."""

    maximums: Optional[list[Row]] = UNSET
    """If requested, the maximum values of metrics."""

    minimums: Optional[list[Row]] = UNSET
    """If requested, the minimum values of metrics."""


class RunRealtimeReportResponseDict(TypedDict):
    row_count: NotRequired[int]
    kind: NotRequired[str]
    totals: NotRequired[list[RowDict]]
    property_quota: NotRequired[PropertyQuota3Dict]
    metric_headers: NotRequired[list[MetricHeaderDict]]
    dimension_headers: NotRequired[list[DimensionHeaderDict]]
    rows: NotRequired[list[RowDict]]
    maximums: NotRequired[list[RowDict]]
    minimums: NotRequired[list[RowDict]]
