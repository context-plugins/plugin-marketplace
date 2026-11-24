from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dimension_header import DimensionHeader, DimensionHeaderDict
from .metric_header import MetricHeader, MetricHeaderDict
from .pivot_header import PivotHeader, PivotHeaderDict
from .property_quota1 import PropertyQuota1, PropertyQuota1Dict
from .response_meta_data2 import ResponseMetaData2, ResponseMetaData2Dict
from .row import Row, RowDict


class RunPivotReportResponse(SdkBaseModel):
    """The response pivot report table corresponding to a pivot request."""

    dimension_headers: Optional[list[DimensionHeader]] = Field(default=UNSET, alias="dimensionHeaders")
    """Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the
    dimensions present in rows."""

    rows: Optional[list[Row]] = UNSET
    """Rows of dimension value combinations and metric values in the report."""

    kind: Optional[str] = UNSET
    """Identifies what kind of resource this message is. This ``kind`` is always the fixed string
    "analyticsData#runPivotReport". Useful to distinguish between response types in JSON."""

    metric_headers: Optional[list[MetricHeader]] = Field(default=UNSET, alias="metricHeaders")
    """Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present
    in rows."""

    pivot_headers: Optional[list[PivotHeader]] = Field(default=UNSET, alias="pivotHeaders")
    """Summarizes the columns and rows created by a pivot. Each pivot in the request produces one header in the
    response. If we have a request like this: "pivots": [{ "fieldNames": ["country", "city"] }, { "fieldNames":
    "eventName" }] We will have the following ``pivotHeaders`` in the response: "pivotHeaders" : [{ "dimensionHeaders":
    [{ "dimensionValues": [ { "value": "United Kingdom" }, { "value": "London" } ] }, { "dimensionValues": [ { "value":
    "Japan" }, { "value": "Osaka" } ] }] }, { "dimensionHeaders": [{ "dimensionValues": [{ "value": "session_start" }]
    }, { "dimensionValues": [{ "value": "scroll" }] }] }]"""

    aggregates: Optional[list[Row]] = UNSET
    """Aggregation of metric values. Can be totals, minimums, or maximums. The returned aggregations are controlled by
    the metric_aggregations in the pivot. The type of aggregation returned in each row is shown by the dimension_values
    which are set to "RESERVED_"."""

    property_quota: Optional[PropertyQuota1] = Field(default=UNSET, alias="propertyQuota")
    """This Google Analytics property's quota state including this request."""

    metadata: Optional[ResponseMetaData2] = UNSET
    """Metadata for the report."""


class RunPivotReportResponseDict(TypedDict):
    dimension_headers: NotRequired[list[DimensionHeaderDict]]
    rows: NotRequired[list[RowDict]]
    kind: NotRequired[str]
    metric_headers: NotRequired[list[MetricHeaderDict]]
    pivot_headers: NotRequired[list[PivotHeaderDict]]
    aggregates: NotRequired[list[RowDict]]
    property_quota: NotRequired[PropertyQuota1Dict]
    metadata: NotRequired[ResponseMetaData2Dict]
