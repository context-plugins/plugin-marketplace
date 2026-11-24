from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_compute_environment_scores_request_filter import (
    GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter,
    GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilterDict,
)
from .google_type_interval1 import GoogleTypeInterval1, GoogleTypeInterval1Dict


class GoogleCloudApigeeV1ComputeEnvironmentScoresRequest(SdkBaseModel):
    """Request for ComputeEnvironmentScores."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Optional. A token that can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there
    are no subsequent pages."""

    time_range: Optional[GoogleTypeInterval1] = Field(default=UNSET, alias="timeRange")
    """Required. Time range for score calculation. At most 14 days of scores will be returned, and both the start and
    end dates must be within the last 90 days."""

    page_size: Optional[int] = Field(default=UNSET, alias="pageSize")
    """Optional. The maximum number of subcomponents to be returned in a single page. The service may return fewer than
    this value. If unspecified, at most 100 subcomponents will be returned in a single page."""

    filters: Optional[list[GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilter]] = UNSET
    """Optional. Filters are used to filter scored components. Return all the components if no filter is mentioned.
    Example: [{ "scorePath": "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source" }, { "scorePath":
    "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target", }] This will return components with path:
    "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/source" OR
    "/org@myorg/envgroup@myenvgroup/env@myenv/proxies/proxy@myproxy/target"
    """


class GoogleCloudApigeeV1ComputeEnvironmentScoresRequestDict(TypedDict):
    page_token: NotRequired[str]
    time_range: NotRequired[GoogleTypeInterval1Dict]
    page_size: NotRequired[int]
    filters: NotRequired[list[GoogleCloudApigeeV1ComputeEnvironmentScoresRequestFilterDict]]
