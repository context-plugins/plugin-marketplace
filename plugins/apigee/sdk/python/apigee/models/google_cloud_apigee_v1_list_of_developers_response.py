from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_developer import GoogleCloudApigeeV1Developer, GoogleCloudApigeeV1DeveloperDict


class GoogleCloudApigeeV1ListOfDevelopersResponse(SdkBaseModel):
    developer: Optional[list[GoogleCloudApigeeV1Developer]] = UNSET
    """List of developers."""


class GoogleCloudApigeeV1ListOfDevelopersResponseDict(TypedDict):
    developer: NotRequired[list[GoogleCloudApigeeV1DeveloperDict]]
