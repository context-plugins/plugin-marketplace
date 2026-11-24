from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_trace_config_override import (
    GoogleCloudApigeeV1TraceConfigOverride,
    GoogleCloudApigeeV1TraceConfigOverrideDict,
)


class GoogleCloudApigeeV1ListTraceConfigOverridesResponse(SdkBaseModel):
    """Response for ListTraceConfigOverrides."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Token value that can be passed as ``page_token`` to retrieve the next page of content."""

    trace_config_overrides: Optional[list[GoogleCloudApigeeV1TraceConfigOverride]] = Field(
        default=UNSET, alias="traceConfigOverrides"
    )
    """List all trace configuration overrides in an environment."""


class GoogleCloudApigeeV1ListTraceConfigOverridesResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    trace_config_overrides: NotRequired[list[GoogleCloudApigeeV1TraceConfigOverrideDict]]
