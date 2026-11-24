from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_api1 import GoogleCloudApihubV1Api1, GoogleCloudApihubV1Api1Dict
from .google_cloud_apihub_v1_api_operation2 import (
    GoogleCloudApihubV1ApiOperation2,
    GoogleCloudApihubV1ApiOperation2Dict,
)
from .google_cloud_apihub_v1_deployment2 import GoogleCloudApihubV1Deployment2, GoogleCloudApihubV1Deployment2Dict
from .google_cloud_apihub_v1_version1 import GoogleCloudApihubV1Version1, GoogleCloudApihubV1Version1Dict


class GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentView(SdkBaseModel):
    """A flattened view of an API, its version, one of its operations and one of the linked deployments. If there are no
    deployments linked to the operation then the result will be empty."""

    deployment: Optional[GoogleCloudApihubV1Deployment2] = UNSET
    """Optional. The deployment."""

    api: Optional[GoogleCloudApihubV1Api1] = UNSET
    """Optional. The API."""

    version: Optional[GoogleCloudApihubV1Version1] = UNSET
    """Optional. The version."""

    api_operation: Optional[GoogleCloudApihubV1ApiOperation2] = Field(default=UNSET, alias="apiOperation")
    """Optional. The API operation."""


class GoogleCloudApihubV1FlattenedApiVersionOperationDeploymentViewDict(TypedDict):
    deployment: NotRequired[GoogleCloudApihubV1Deployment2Dict]
    api: NotRequired[GoogleCloudApihubV1Api1Dict]
    version: NotRequired[GoogleCloudApihubV1Version1Dict]
    api_operation: NotRequired[GoogleCloudApihubV1ApiOperation2Dict]
