from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_dimension_metric import (
    GoogleCloudApigeeV1DimensionMetric,
    GoogleCloudApigeeV1DimensionMetricDict,
)
from .google_cloud_apigee_v1_metric import GoogleCloudApigeeV1Metric, GoogleCloudApigeeV1MetricDict


class GoogleCloudApigeeV1StatsEnvironmentStats(SdkBaseModel):
    """Encapsulates the environment wrapper: ```` "environments": [ { "metrics": [ { "name": "sum(message_count)",
    "values": [ "2.52056245E8" ] } ], "name": "prod" } ]````"""

    metrics: Optional[list[GoogleCloudApigeeV1Metric]] = UNSET
    """In the final response, only one of the following fields will be present based on the dimensions provided. If no
    dimensions are provided, then only top-level metrics is provided. If dimensions are included, then there will be a
    top-level dimensions field under environments which will contain metrics values and the dimension name. Example:
    ```` "environments": [ { "dimensions": [ { "metrics": [ { "name": "sum(message_count)", "values": [ "2.14049521E8" ]
    } ], "name": "nit_proxy" } ], "name": "prod" } ]```` or ````"environments": [ { "metrics": [ { "name":
    "sum(message_count)", "values": [ "2.19026331E8" ] } ], "name": "prod" } ]```` List of metric values."""

    name: Optional[str] = UNSET
    """Name of the environment."""

    dimensions: Optional[list[GoogleCloudApigeeV1DimensionMetric]] = UNSET
    """List of metrics grouped under dimensions."""


class GoogleCloudApigeeV1StatsEnvironmentStatsDict(TypedDict):
    metrics: NotRequired[list[GoogleCloudApigeeV1MetricDict]]
    name: NotRequired[str]
    dimensions: NotRequired[list[GoogleCloudApigeeV1DimensionMetricDict]]
