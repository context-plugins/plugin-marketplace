from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_deployment4 import GoogleCloudApihubV1Deployment4, GoogleCloudApihubV1Deployment4Dict


class GoogleCloudApihubV1DeploymentMetadata(SdkBaseModel):
    """The metadata associated with a deployment."""

    original_update_time: Optional[str] = Field(default=UNSET, alias="originalUpdateTime")
    """Required. Timestamp indicating when the deployment was last updated at the source."""

    original_id: Optional[str] = Field(default=UNSET, alias="originalId")
    """Optional. The unique identifier of the deployment in the system where it was originally created."""

    original_create_time: Optional[str] = Field(default=UNSET, alias="originalCreateTime")
    """Optional. Timestamp indicating when the deployment was created at the source."""

    deployment: Optional[GoogleCloudApihubV1Deployment4] = UNSET
    """Required. The deployment resource to be pushed to Hub's collect layer. The ID of the deployment will be generated
    by Hub."""


class GoogleCloudApihubV1DeploymentMetadataDict(TypedDict):
    original_update_time: NotRequired[str]
    original_id: NotRequired[str]
    original_create_time: NotRequired[str]
    deployment: NotRequired[GoogleCloudApihubV1Deployment4Dict]
