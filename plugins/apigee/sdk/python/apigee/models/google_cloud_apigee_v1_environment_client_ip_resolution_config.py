from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_environment_client_ip_resolution_config_header_index_algorithm import (
    GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithm,
    GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithmDict,
)


class GoogleCloudApigeeV1EnvironmentClientIpResolutionConfig(SdkBaseModel):
    """Configuration for resolving the client ip."""

    header_index_algorithm: Optional[
        GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithm
    ] = Field(default=UNSET, alias="headerIndexAlgorithm")
    """Resolves the client ip based on a custom header."""


class GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigDict(TypedDict):
    header_index_algorithm: NotRequired[GoogleCloudApigeeV1EnvironmentClientIpResolutionConfigHeaderIndexAlgorithmDict]
