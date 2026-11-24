from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_app_group_app import GoogleCloudApigeeV1AppGroupApp, GoogleCloudApigeeV1AppGroupAppDict


class GoogleCloudApigeeV1ListAppGroupAppsResponse(SdkBaseModel):
    """Response for ListAppGroupApps"""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Token that can be sent as ``next_page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    app_group_apps: Optional[list[GoogleCloudApigeeV1AppGroupApp]] = Field(default=UNSET, alias="appGroupApps")
    """List of AppGroup apps and their credentials."""


class GoogleCloudApigeeV1ListAppGroupAppsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    app_group_apps: NotRequired[list[GoogleCloudApigeeV1AppGroupAppDict]]
