from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_api_metadata import GoogleCloudApihubV1ApiMetadata, GoogleCloudApihubV1ApiMetadataDict


class GoogleCloudApihubV1ApiMetadataList(SdkBaseModel):
    """The message to hold repeated API metadata."""

    api_metadata: Optional[list[GoogleCloudApihubV1ApiMetadata]] = Field(default=UNSET, alias="apiMetadata")
    """Required. The list of API metadata."""


class GoogleCloudApihubV1ApiMetadataListDict(TypedDict):
    api_metadata: NotRequired[list[GoogleCloudApihubV1ApiMetadataDict]]
