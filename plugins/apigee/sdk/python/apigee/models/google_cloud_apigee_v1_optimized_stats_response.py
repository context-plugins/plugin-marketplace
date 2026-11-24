from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_metadata1 import GoogleCloudApigeeV1Metadata1, GoogleCloudApigeeV1Metadata1Dict
from .google_cloud_apigee_v1_optimized_stats_node2 import (
    GoogleCloudApigeeV1OptimizedStatsNode2,
    GoogleCloudApigeeV1OptimizedStatsNode2Dict,
)


class GoogleCloudApigeeV1OptimizedStatsResponse(SdkBaseModel):
    """Encapsulates a response format for JavaScript Optimized Scenario."""

    meta_data: Optional[GoogleCloudApigeeV1Metadata1] = Field(default=UNSET, alias="metaData")
    """Metadata information about the query executed."""

    result_truncated: Optional[bool] = Field(default=UNSET, alias="resultTruncated")
    """Boolean flag that indicates whether the results were truncated based on the limit parameter."""

    time_unit: Optional[list[str]] = Field(default=UNSET, alias="TimeUnit")
    """List of time unit values. Time unit refers to an epoch timestamp value."""

    stats: Optional[GoogleCloudApigeeV1OptimizedStatsNode2] = UNSET
    """``stats`` results."""


class GoogleCloudApigeeV1OptimizedStatsResponseDict(TypedDict):
    meta_data: NotRequired[GoogleCloudApigeeV1Metadata1Dict]
    result_truncated: NotRequired[bool]
    time_unit: NotRequired[list[str]]
    stats: NotRequired[GoogleCloudApigeeV1OptimizedStatsNode2Dict]
