from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_api_debug_session import (
    GoogleCloudApigeeV1ApiDebugSession,
    GoogleCloudApigeeV1ApiDebugSessionDict,
)


class GoogleCloudApigeeV1ListApiDebugSessionsResponse(SdkBaseModel):
    """Response for ListApiDebugSessions."""

    next_page_token: Optional[str] = Field(default=UNSET, alias="nextPageToken")
    """Page token that you can include in a ListApiDebugSessionsRequest to retrieve the next page. If omitted, no
    subsequent pages exist."""

    sessions: Optional[list[GoogleCloudApigeeV1ApiDebugSession]] = UNSET
    """Session info that includes debug session ID, environment ID, api proxy revision ID and the first transaction
    creation timestamp."""


class GoogleCloudApigeeV1ListApiDebugSessionsResponseDict(TypedDict):
    next_page_token: NotRequired[str]
    sessions: NotRequired[list[GoogleCloudApigeeV1ApiDebugSessionDict]]
