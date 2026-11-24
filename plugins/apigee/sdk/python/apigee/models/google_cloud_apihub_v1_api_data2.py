from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_api_metadata_list2 import (
    GoogleCloudApihubV1ApiMetadataList2,
    GoogleCloudApihubV1ApiMetadataList2Dict,
)


class GoogleCloudApihubV1ApiData2(SdkBaseModel):
    """Required. The API data to be collected."""

    api_metadata_list: Optional[GoogleCloudApihubV1ApiMetadataList2] = Field(default=UNSET, alias="apiMetadataList")
    """Optional. The list of API metadata."""


class GoogleCloudApihubV1ApiData2Dict(TypedDict):
    api_metadata_list: NotRequired[GoogleCloudApihubV1ApiMetadataList2Dict]
