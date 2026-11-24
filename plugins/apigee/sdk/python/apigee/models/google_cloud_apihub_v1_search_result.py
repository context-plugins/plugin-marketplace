from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_api_hub_resource2 import (
    GoogleCloudApihubV1ApiHubResource2,
    GoogleCloudApihubV1ApiHubResource2Dict,
)


class GoogleCloudApihubV1SearchResult(SdkBaseModel):
    """Represents the search results."""

    resource: Optional[GoogleCloudApihubV1ApiHubResource2] = UNSET
    """This represents the ApiHubResource. Note: Only selected fields of the resources are populated in response."""


class GoogleCloudApihubV1SearchResultDict(TypedDict):
    resource: NotRequired[GoogleCloudApihubV1ApiHubResource2Dict]
