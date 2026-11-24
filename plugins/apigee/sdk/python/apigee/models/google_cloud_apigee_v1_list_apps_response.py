from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_app import GoogleCloudApigeeV1App, GoogleCloudApigeeV1AppDict


class GoogleCloudApigeeV1ListAppsResponse(SdkBaseModel):
    total_size: Optional[int] = Field(default=UNSET, alias="totalSize")
    """Total count of Apps."""

    app: Optional[list[GoogleCloudApigeeV1App]] = UNSET
    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Token that can be sent as ``next_page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""


class GoogleCloudApigeeV1ListAppsResponseDict(TypedDict):
    total_size: NotRequired[int]
    app: NotRequired[list[GoogleCloudApigeeV1AppDict]]
    next_page_token: NotRequired[str]
