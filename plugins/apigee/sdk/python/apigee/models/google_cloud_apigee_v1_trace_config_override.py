from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_trace_sampling_config2 import (
    GoogleCloudApigeeV1TraceSamplingConfig2,
    GoogleCloudApigeeV1TraceSamplingConfig2Dict,
)


class GoogleCloudApigeeV1TraceConfigOverride(SdkBaseModel):
    """A representation of a configuration override."""

    name: Optional[str] = UNSET
    """ID of the trace configuration override specified as a system-generated UUID."""

    api_proxy: Optional[str] = Field(default=UNSET, alias="apiProxy")
    """ID of the API proxy that will have its trace configuration overridden."""

    sampling_config: Optional[GoogleCloudApigeeV1TraceSamplingConfig2] = Field(default=UNSET, alias="samplingConfig")
    """Trace configuration to override."""


class GoogleCloudApigeeV1TraceConfigOverrideDict(TypedDict):
    name: NotRequired[str]
    api_proxy: NotRequired[str]
    sampling_config: NotRequired[GoogleCloudApigeeV1TraceSamplingConfig2Dict]
