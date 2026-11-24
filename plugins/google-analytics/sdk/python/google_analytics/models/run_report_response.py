from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .dimension_header import DimensionHeader, DimensionHeaderDict
from .metric_header import MetricHeader, MetricHeaderDict
from .property_quota1 import PropertyQuota1, PropertyQuota1Dict
from .response_meta_data2 import ResponseMetaData2, ResponseMetaData2Dict
from .row import Row, RowDict


class RunReportResponse(SdkBaseModel):
    """The response report table corresponding to a request."""

    kind: Optional[str] = UNSET
    """Identifies what kind of resource this message is. This ``kind`` is always the fixed string
    "analyticsData#runReport". Useful to distinguish between response types in JSON."""

    property_quota: Optional[PropertyQuota1] = Field(default=UNSET, alias="propertyQuota")
    """This Google Analytics property's quota state including this request."""

    metric_headers: Optional[list[MetricHeader]] = Field(default=UNSET, alias="metricHeaders")
    """Describes metric columns. The number of MetricHeaders and ordering of MetricHeaders matches the metrics present
    in rows."""

    dimension_headers: Optional[list[DimensionHeader]] = Field(default=UNSET, alias="dimensionHeaders")
    """Describes dimension columns. The number of DimensionHeaders and ordering of DimensionHeaders matches the
    dimensions present in rows."""

    maximums: Optional[list[Row]] = UNSET
    """If requested, the maximum values of metrics."""

    minimums: Optional[list[Row]] = UNSET
    """If requested, the minimum values of metrics."""

    metadata: Optional[ResponseMetaData2] = UNSET
    """Metadata for the report."""

    rows: Optional[list[Row]] = UNSET
    """Rows of dimension value combinations and metric values in the report."""

    row_count: Optional[int] = Field(default=UNSET, alias="rowCount")
    """The total number of rows in the query result. ``rowCount`` is independent of the number of rows returned in the
    response, the ``limit`` request parameter, and the ``offset`` request parameter. For example if a query returns 175
    rows and includes ``limit`` of 50 in the API request, the response will contain ``rowCount`` of 175 but only 50
    rows. To learn more about this pagination parameter, see `Pagination
    <https://developers.google.com/analytics/devguides/reporting/data/v1/basics#pagination>`__."""

    totals: Optional[list[Row]] = UNSET
    """If requested, the totaled values of metrics."""


class RunReportResponseDict(TypedDict):
    kind: NotRequired[str]
    property_quota: NotRequired[PropertyQuota1Dict]
    metric_headers: NotRequired[list[MetricHeaderDict]]
    dimension_headers: NotRequired[list[DimensionHeaderDict]]
    maximums: NotRequired[list[RowDict]]
    minimums: NotRequired[list[RowDict]]
    metadata: NotRequired[ResponseMetaData2Dict]
    rows: NotRequired[list[RowDict]]
    row_count: NotRequired[int]
    totals: NotRequired[list[RowDict]]
