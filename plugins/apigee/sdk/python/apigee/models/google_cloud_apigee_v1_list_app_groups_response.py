from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_app_group import GoogleCloudApigeeV1AppGroup, GoogleCloudApigeeV1AppGroupDict


class GoogleCloudApigeeV1ListAppGroupsResponse(SdkBaseModel):
    """ListAppGroupsResponse contains the 0 or more AppGroups, along with the optional page token and the total count of
    apps."""

    total_size: Optional[int] = Field(default=UNSET, alias="totalSize")
    """Total count of AppGroups."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Token that can be sent as ``next_page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    app_groups: Optional[list[GoogleCloudApigeeV1AppGroup]] = Field(default=UNSET, alias="appGroups")
    """List of AppGroups."""


class GoogleCloudApigeeV1ListAppGroupsResponseDict(TypedDict):
    total_size: NotRequired[int]
    next_page_token: NotRequired[str]
    app_groups: NotRequired[list[GoogleCloudApigeeV1AppGroupDict]]
