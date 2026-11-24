from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_resource_file import GoogleCloudApigeeV1ResourceFile, GoogleCloudApigeeV1ResourceFileDict


class GoogleCloudApigeeV1ResourceFiles3(SdkBaseModel):
    """List of resource files included in the API proxy revision."""

    resource_file: Optional[list[GoogleCloudApigeeV1ResourceFile]] = Field(default=UNSET, alias="resourceFile")
    """List of resource files."""


class GoogleCloudApigeeV1ResourceFiles3Dict(TypedDict):
    resource_file: NotRequired[list[GoogleCloudApigeeV1ResourceFileDict]]
