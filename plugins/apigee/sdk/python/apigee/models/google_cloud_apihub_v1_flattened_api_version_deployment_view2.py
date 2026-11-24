from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_api1 import GoogleCloudApihubV1Api1, GoogleCloudApihubV1Api1Dict
from .google_cloud_apihub_v1_deployment2 import GoogleCloudApihubV1Deployment2, GoogleCloudApihubV1Deployment2Dict
from .google_cloud_apihub_v1_version1 import GoogleCloudApihubV1Version1, GoogleCloudApihubV1Version1Dict


class GoogleCloudApihubV1FlattenedApiVersionDeploymentView2(SdkBaseModel):
    """MCP server view."""

    version: Optional[GoogleCloudApihubV1Version1] = UNSET
    """Optional. The version."""

    api: Optional[GoogleCloudApihubV1Api1] = UNSET
    """Optional. The API."""

    deployment: Optional[GoogleCloudApihubV1Deployment2] = UNSET
    """Optional. The deployment."""


class GoogleCloudApihubV1FlattenedApiVersionDeploymentView2Dict(TypedDict):
    version: NotRequired[GoogleCloudApihubV1Version1Dict]
    api: NotRequired[GoogleCloudApihubV1Api1Dict]
    deployment: NotRequired[GoogleCloudApihubV1Deployment2Dict]
