from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_metadata2 import GoogleCloudApigeeV1Metadata2, GoogleCloudApigeeV1Metadata2Dict
from .google_cloud_apigee_v1_stats_environment_stats import (
    GoogleCloudApigeeV1StatsEnvironmentStats,
    GoogleCloudApigeeV1StatsEnvironmentStatsDict,
)
from .google_cloud_apigee_v1_stats_host_stats import (
    GoogleCloudApigeeV1StatsHostStats,
    GoogleCloudApigeeV1StatsHostStatsDict,
)


class GoogleCloudApigeeV1Stats(SdkBaseModel):
    """Encapsulates a ``stats`` response."""

    hosts: Optional[list[GoogleCloudApigeeV1StatsHostStats]] = UNSET
    """List of query results grouped by host."""

    environments: Optional[list[GoogleCloudApigeeV1StatsEnvironmentStats]] = UNSET
    """List of query results on the environment level."""

    meta_data: Optional[GoogleCloudApigeeV1Metadata2] = Field(default=UNSET, alias="metaData")
    """Metadata information."""


class GoogleCloudApigeeV1StatsDict(TypedDict):
    hosts: NotRequired[list[GoogleCloudApigeeV1StatsHostStatsDict]]
    environments: NotRequired[list[GoogleCloudApigeeV1StatsEnvironmentStatsDict]]
    meta_data: NotRequired[GoogleCloudApigeeV1Metadata2Dict]
