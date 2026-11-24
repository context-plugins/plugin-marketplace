from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_environment_client_ip_resolution_config_header_index_algorithm import (
    GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithm,
    GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithmDict,
)


class GoogleCloudApigeeV1EnvironmentClientIpResolutionConfig2(SdkBaseModel):
    """Optional. The algorithm to resolve IP. This will affect Analytics, API Security, and other features that use the
    client ip. To remove a client ip resolution config, update the field to an empty value. Example: '{
    "clientIpResolutionConfig" = {} }' For more information, see:
    https://cloud.google.com/apigee/docs/api-platform/system-administration/client-ip-resolution."""

    header_index_algorithm: Optional[
        GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithm
    ] = Field(default=UNSET, alias="headerIndexAlgorithm")
    """Resolves the client ip based on a custom header."""


class GoogleCloudApigeeV1EnvironmentClientIpResolutionConfig2Dict(TypedDict):
    header_index_algorithm: NotRequired[GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithmDict]
