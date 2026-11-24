from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_api_doc import GoogleCloudApigeeV1ApiDoc, GoogleCloudApigeeV1ApiDocDict


class GoogleCloudApigeeV1ListApiDocsResponse(SdkBaseModel):
    request_id: Optional[str] = Field(default=UNSET, alias="requestId")
    """Unique ID of the request."""

    error_code: Optional[str] = Field(default=UNSET, alias="errorCode")
    """Unique error code for the request, if any."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """A token, which can be sent as ``page_token`` to retrieve the next page. If this field is omitted, there are no
    subsequent pages."""

    message: Optional[str] = UNSET
    """Description of the operation."""

    data: Optional[list[GoogleCloudApigeeV1ApiDoc]] = UNSET
    """The catalog item resources."""

    status: Optional[str] = UNSET
    """Status of the operation."""


class GoogleCloudApigeeV1ListApiDocsResponseDict(TypedDict):
    request_id: NotRequired[str]
    error_code: NotRequired[str]
    next_page_token: NotRequired[str]
    message: NotRequired[str]
    data: NotRequired[list[GoogleCloudApigeeV1ApiDocDict]]
    status: NotRequired[str]
