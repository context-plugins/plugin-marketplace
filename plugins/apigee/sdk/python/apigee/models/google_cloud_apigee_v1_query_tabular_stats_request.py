from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_metric_aggregation import (
    GoogleCloudApigeeV1MetricAggregation,
    GoogleCloudApigeeV1MetricAggregationDict,
)
from .google_type_interval3 import GoogleTypeInterval3, GoogleTypeInterval3Dict


class GoogleCloudApigeeV1QueryTabularStatsRequest(SdkBaseModel):
    """Request payload representing the query to be run for fetching security statistics as rows."""

    dimensions: Optional[list[str]] = UNSET
    """Required. List of dimension names to group the aggregations by."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Identifies a sequence of rows."""

    page_size: Optional[int] = Field(default=UNSET, alias="pageSize")
    """Page size represents the number of rows."""

    filter: Optional[str] = UNSET
    """Filter further on specific dimension values. Follows the same grammar as custom report's filter expressions.
    Example, apiproxy eq 'foobar'.
    https://cloud.google.com/apigee/docs/api-platform/analytics/analytics-reference#filters"""

    time_range: Optional[GoogleTypeInterval3] = Field(default=UNSET, alias="timeRange")
    """Time range for the stats."""

    metrics: Optional[list[GoogleCloudApigeeV1MetricAggregation]] = UNSET
    """Required. List of metrics and their aggregations."""


class GoogleCloudApigeeV1QueryTabularStatsRequestDict(TypedDict):
    dimensions: NotRequired[list[str]]
    page_token: NotRequired[str]
    page_size: NotRequired[int]
    filter: NotRequired[str]
    time_range: NotRequired[GoogleTypeInterval3Dict]
    metrics: NotRequired[list[GoogleCloudApigeeV1MetricAggregationDict]]
