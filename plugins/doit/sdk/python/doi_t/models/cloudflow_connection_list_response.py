from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .cloudflow_connection import CloudflowConnection, CloudflowConnectionDict


class CloudflowConnectionListResponse(SdkBaseModel):
    """Cursor-paginated list of CloudFlow connections."""

    items: list[CloudflowConnection]
    """List of connections for the current page."""

    page_token: OptionalNullable[str] = Field(default=UNSET, alias="pageToken")
    """Opaque cursor for the next page. ``null`` when there are no more results."""

    row_count: OptionalNullable[int] = Field(default=UNSET, alias="rowCount")
    """Always ``null``. Row count is not computed for this endpoint."""


class CloudflowConnectionListResponseDict(TypedDict):
    items: list[CloudflowConnectionDict]
    page_token: NotRequired[str | None]
    row_count: NotRequired[int | None]
