from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_optimized_stats_response2 import (
    GoogleCloudApigeeV1OptimizedStatsResponse2,
    GoogleCloudApigeeV1OptimizedStatsResponse2Dict,
)


class GoogleCloudApigeeV1OptimizedStats(SdkBaseModel):
    """Encapsulates a response format for JavaScript Optimized Scenario."""

    response: Optional[GoogleCloudApigeeV1OptimizedStatsResponse2] = Field(default=UNSET, alias="Response")
    """Wraps the ``stats`` response for JavaScript Optimized Scenario with a response key. For example: ````{
    "Response": { "TimeUnit": [], "metaData": { "errors": [], "notices": [ "Source:Postgres", "Table used:
    edge.api.aaxgroup001.agg_api", "PG Host:ruappg08-ro.production.apigeeks.net", "query served
    by:80c4ebca-6a10-4a2e-8faf-c60c1ee306ca" ] }, "resultTruncated": false, "stats": { "data": [ { "identifier": {
    "names": [ "apiproxy" ], "values": [ "sirjee" ] }, "metric": [ { "env": "prod", "name": "sum(message_count)",
    "values": [ 36.0 ] }, { "env": "prod", "name": "sum(is_error)", "values": [ 36.0 ] } ] } ] } } }````"""


class GoogleCloudApigeeV1OptimizedStatsDict(TypedDict):
    response: NotRequired[GoogleCloudApigeeV1OptimizedStatsResponse2Dict]
