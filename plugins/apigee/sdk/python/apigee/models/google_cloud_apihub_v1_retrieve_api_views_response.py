from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_api_view import GoogleCloudApihubV1ApiView, GoogleCloudApihubV1ApiViewDict


class GoogleCloudApihubV1RetrieveApiViewsResponse(SdkBaseModel):
    """The RetrieveApiViews method's response."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Next page token."""

    api_views: Optional[list[GoogleCloudApihubV1ApiView]] = Field(default=UNSET, alias="apiViews")
    """Output only. The list of API views."""


class GoogleCloudApihubV1RetrieveApiViewsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    api_views: NotRequired[list[GoogleCloudApihubV1ApiViewDict]]
