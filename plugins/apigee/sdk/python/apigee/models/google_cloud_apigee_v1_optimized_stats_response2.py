from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_metadata1 import GoogleCloudApigeeV1Metadata1, GoogleCloudApigeeV1Metadata1Dict
from .google_cloud_apigee_v1_optimized_stats_node2 import (
    GoogleCloudApigeeV1OptimizedStatsNode2,
    GoogleCloudApigeeV1OptimizedStatsNode2Dict,
)


class GoogleCloudApigeeV1OptimizedStatsResponse2(SdkBaseModel):
    """Wraps the ``stats`` response for JavaScript Optimized Scenario with a response key. For example: ````{
    "Response": { "TimeUnit": [], "metaData": { "errors": [], "notices": [ "Source:Postgres", "Table used:
    edge.api.aaxgroup001.agg_api", "PG Host:ruappg08-ro.production.apigeeks.net", "query served
    by:80c4ebca-6a10-4a2e-8faf-c60c1ee306ca" ] }, "resultTruncated": false, "stats": { "data": [ { "identifier": {
    "names": [ "apiproxy" ], "values": [ "sirjee" ] }, "metric": [ { "env": "prod", "name": "sum(message_count)",
    "values": [ 36.0 ] }, { "env": "prod", "name": "sum(is_error)", "values": [ 36.0 ] } ] } ] } } }````"""

    meta_data: Optional[GoogleCloudApigeeV1Metadata1] = Field(default=UNSET, alias="metaData")
    """Metadata information about the query executed."""

    result_truncated: Optional[bool] = Field(default=UNSET, alias="resultTruncated")
    """Boolean flag that indicates whether the results were truncated based on the limit parameter."""

    time_unit: Optional[list[str]] = Field(default=UNSET, alias="TimeUnit")
    """List of time unit values. Time unit refers to an epoch timestamp value."""

    stats: Optional[GoogleCloudApigeeV1OptimizedStatsNode2] = UNSET
    """``stats`` results."""


class GoogleCloudApigeeV1OptimizedStatsResponse2Dict(TypedDict):
    meta_data: NotRequired[GoogleCloudApigeeV1Metadata1Dict]
    result_truncated: NotRequired[bool]
    time_unit: NotRequired[list[str]]
    stats: NotRequired[GoogleCloudApigeeV1OptimizedStatsNode2Dict]
