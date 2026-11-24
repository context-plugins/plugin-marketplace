from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .google_cloud_apigee_v1_async_query import GoogleCloudApigeeV1AsyncQuery, GoogleCloudApigeeV1AsyncQueryDict


class GoogleCloudApigeeV1ListAsyncQueriesResponse(SdkBaseModel):
    """The response for ListAsyncQueries."""

    queries: Optional[list[GoogleCloudApigeeV1AsyncQuery]] = UNSET
    """The asynchronous queries belong to requested resource name."""


class GoogleCloudApigeeV1ListAsyncQueriesResponseDict(TypedDict):
    queries: NotRequired[list[GoogleCloudApigeeV1AsyncQueryDict]]
