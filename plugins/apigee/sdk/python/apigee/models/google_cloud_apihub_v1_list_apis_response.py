from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apihub_v1_api import GoogleCloudApihubV1Api, GoogleCloudApihubV1ApiDict


class GoogleCloudApihubV1ListApisResponse(SdkBaseModel):
    """The ListApis method's response."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    apis: Optional[list[GoogleCloudApihubV1Api]] = UNSET
    """The API resources present in the API hub."""


class GoogleCloudApihubV1ListApisResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    apis: NotRequired[list[GoogleCloudApihubV1ApiDict]]
