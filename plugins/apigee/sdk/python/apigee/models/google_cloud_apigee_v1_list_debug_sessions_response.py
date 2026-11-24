from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_session import GoogleCloudApigeeV1Session, GoogleCloudApigeeV1SessionDict


class GoogleCloudApigeeV1ListDebugSessionsResponse(SdkBaseModel):
    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Page token that you can include in a ListDebugSessionsRequest to retrieve the next page. If omitted, no
    subsequent pages exist."""

    sessions: Optional[list[GoogleCloudApigeeV1Session]] = UNSET
    """Session info that includes debug session ID and the first transaction creation timestamp."""


class GoogleCloudApigeeV1ListDebugSessionsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    sessions: NotRequired[list[GoogleCloudApigeeV1SessionDict]]
