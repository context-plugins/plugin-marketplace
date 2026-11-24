from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sync_item import SyncItem, SyncItemDict


class SyncResponse(SdkBaseModel):
    """The response from a content sync operation, containing the synced items and tokens for subsequent sync
    requests."""

    items: Optional[list[SyncItem]] = UNSET
    """Array of sync item objects representing content changes."""

    pagination_token: Optional[str] = Field(default=UNSET, alias="paginationToken")
    """Token to retrieve the next page of sync results. Present only when more pages are available."""

    sync_token: Optional[str] = Field(default=UNSET, alias="syncToken")
    """Token representing the current sync state. Use this in subsequent sync requests to receive only new changes."""

    total_count: Optional[int] = UNSET
    """Total number of items in the sync response."""

    limit: Optional[int] = UNSET
    """Maximum items returned per page."""

    skip: Optional[int] = UNSET
    """Number of items skipped in this response."""


class SyncResponseDict(TypedDict):
    items: NotRequired[list[SyncItemDict]]
    pagination_token: NotRequired[str]
    sync_token: NotRequired[str]
    total_count: NotRequired[int]
    limit: NotRequired[int]
    skip: NotRequired[int]
