from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_environment_filter1 import (
    GoogleCloudApihubV1EnvironmentFilter1,
    GoogleCloudApihubV1EnvironmentFilter1Dict,
)


class GoogleCloudApihubV1ApigeeOpdkConfig2(SdkBaseModel):
    """Configuration for Apigee OPDK gateways."""

    environment_filter: Optional[GoogleCloudApihubV1EnvironmentFilter1] = Field(
        default=UNSET, alias="environmentFilter"
    )
    """Optional. The filter to apply on the resources managed by the gateway plugin instance. If provided this filter
    applies environment specific filtering."""


class GoogleCloudApihubV1ApigeeOpdkConfig2Dict(TypedDict):
    environment_filter: NotRequired[GoogleCloudApihubV1EnvironmentFilter1Dict]
