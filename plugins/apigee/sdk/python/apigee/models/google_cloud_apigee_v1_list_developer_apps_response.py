from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_developer_app import GoogleCloudApigeeV1DeveloperApp, GoogleCloudApigeeV1DeveloperAppDict


class GoogleCloudApigeeV1ListDeveloperAppsResponse(SdkBaseModel):
    app: Optional[list[GoogleCloudApigeeV1DeveloperApp]] = UNSET
    """List of developer apps and their credentials."""


class GoogleCloudApigeeV1ListDeveloperAppsResponseDict(TypedDict):
    app: NotRequired[list[GoogleCloudApigeeV1DeveloperAppDict]]
