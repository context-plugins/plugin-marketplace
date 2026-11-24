from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.timestamp_order import TimestampOrderOrStr
from .enums.window_size import WindowSizeOrStr
from .google_cloud_apigee_v1_metric_aggregation import (
    GoogleCloudApigeeV1MetricAggregation,
    GoogleCloudApigeeV1MetricAggregationDict,
)
from .google_type_interval2 import GoogleTypeInterval2, GoogleTypeInterval2Dict


class GoogleCloudApigeeV1QueryTimeSeriesStatsRequest(SdkBaseModel):
    """QueryTimeSeriesStatsRequest represents a query that returns a collection of time series sequences grouped by
    their values."""

    time_range: Optional[GoogleTypeInterval2] = Field(default=UNSET, alias="timeRange")
    """Required. Time range for the stats."""

    page_size: Optional[int] = Field(default=UNSET, alias="pageSize")
    """Page size represents the number of time series sequences, one per unique set of dimensions and their values."""

    dimensions: Optional[list[str]] = UNSET
    """List of dimension names to group the aggregations by. If no dimensions are passed, a single trend line
    representing the requested metric aggregations grouped by environment is returned."""

    metrics: Optional[list[GoogleCloudApigeeV1MetricAggregation]] = UNSET
    """Required. List of metrics and their aggregations."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Page token stands for a specific collection of time series sequences."""

    window_size: Optional[WindowSizeOrStr] = Field(default=UNSET, alias="windowSize")
    """Time buckets to group the stats by."""

    timestamp_order: Optional[TimestampOrderOrStr] = Field(default=UNSET, alias="timestampOrder")
    """Order the sequences in increasing or decreasing order of timestamps. Default is descending order of timestamps
    (latest first)."""

    filter: Optional[str] = UNSET
    """Filter further on specific dimension values. Follows the same grammar as custom report's filter expressions.
    Example, apiproxy eq 'foobar'.
    https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters"""


class GoogleCloudApigeeV1QueryTimeSeriesStatsRequestDict(TypedDict):
    time_range: NotRequired[GoogleTypeInterval2Dict]
    page_size: NotRequired[int]
    dimensions: NotRequired[list[str]]
    metrics: NotRequired[list[GoogleCloudApigeeV1MetricAggregationDict]]
    page_token: NotRequired[str]
    window_size: NotRequired[WindowSizeOrStr]
    timestamp_order: NotRequired[TimestampOrderOrStr]
    filter: NotRequired[str]
