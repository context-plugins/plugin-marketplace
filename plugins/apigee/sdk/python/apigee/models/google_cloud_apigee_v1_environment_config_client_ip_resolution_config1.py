from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_environment_config_client_ip_resolution_config_header_index_algorithm import (
    GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfigHeaderIndexAlgorithm,
    GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfigHeaderIndexAlgorithmDict,
)


class GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfig1(SdkBaseModel):
    """The algorithm to resolve IP."""

    header_index_algorithm: Optional[
        GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfigHeaderIndexAlgorithm
    ] = Field(default=UNSET, alias="headerIndexAlgorithm")
    """Resolves the client ip based on a custom header."""


class GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfig1Dict(TypedDict):
    header_index_algorithm: NotRequired[
        GoogleCloudApigeeV1EnvironmentConfigClientIpResolutionConfigHeaderIndexAlgorithmDict
    ]
