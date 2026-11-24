from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_api_hub_instance1 import (
    GoogleCloudApihubV1ApiHubInstance1,
    GoogleCloudApihubV1ApiHubInstance1Dict,
)


class GoogleCloudApihubV1LookupApiHubInstanceResponse(SdkBaseModel):
    """The LookupApiHubInstance method's response.`"""

    api_hub_instance: Optional[GoogleCloudApihubV1ApiHubInstance1] = Field(default=UNSET, alias="apiHubInstance")
    """API Hub instance for a project if it exists, empty otherwise."""


class GoogleCloudApihubV1LookupApiHubInstanceResponseDict(TypedDict):
    api_hub_instance: NotRequired[GoogleCloudApihubV1ApiHubInstance1Dict]
