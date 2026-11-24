from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_resource_file import GoogleCloudApigeeV1ResourceFile, GoogleCloudApigeeV1ResourceFileDict


class GoogleCloudApigeeV1ListEnvironmentResourcesResponse(SdkBaseModel):
    """Response for ListEnvironmentResources"""

    resource_file: Optional[list[GoogleCloudApigeeV1ResourceFile]] = Field(default=UNSET, alias="resourceFile")
    """List of resources files."""


class GoogleCloudApigeeV1ListEnvironmentResourcesResponseDict(TypedDict):
    resource_file: NotRequired[list[GoogleCloudApigeeV1ResourceFileDict]]
