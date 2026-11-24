from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_meta_data2 import GoogleCloudApihubV1MetaData2, GoogleCloudApihubV1MetaData2Dict


class GoogleCloudApihubV1ApigeeXTargetDetails(SdkBaseModel):
    """The target configuration for Apigee X. Note: If this API is called while an earlier deployment is still in
    progress, the earlier deployment will be aborted and a new deployment will be triggered."""

    target_project: Optional[str] = Field(default=UNSET, alias="targetProject")
    """Required. The runtime project that hosts the Apigee X organization. This must be one of the runtime projects
    attached to the API Hub host project."""

    proxy: Optional[str] = UNSET
    """Required. This name identifies the proxy resource in Apigee. It typically follows a standard alphanumeric format
    (e.g., "mcp-discovery-server")."""

    environment: Optional[str] = UNSET
    """Required. The specific Apigee environment where the server will be deployed."""

    deployed_revision: Optional[str] = Field(default=UNSET, alias="deployedRevision")
    """Output only. The revision number of the Apigee proxy that was deployed."""

    metadata: Optional[GoogleCloudApihubV1MetaData2] = UNSET
    """Optional. Metadata for the proxy configuration in Apigee X."""


class GoogleCloudApihubV1ApigeeXTargetDetailsDict(TypedDict):
    target_project: NotRequired[str]
    proxy: NotRequired[str]
    environment: NotRequired[str]
    deployed_revision: NotRequired[str]
    metadata: NotRequired[GoogleCloudApihubV1MetaData2Dict]
