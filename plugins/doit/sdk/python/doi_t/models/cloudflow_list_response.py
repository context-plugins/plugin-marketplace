from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .cloudflow import Cloudflow, CloudflowDict


class CloudflowListResponse(SdkBaseModel):
    items: list[Cloudflow]
    """List of CloudFlows."""

    page_token: OptionalNullable[str] = Field(default=UNSET, alias="pageToken")
    """Opaque cursor for the next page. ``null`` when there are no more CloudFlows."""

    row_count: OptionalNullable[int] = Field(default=UNSET, alias="rowCount")
    """Always ``null``. Row count is not computed for this endpoint."""


class CloudflowListResponseDict(TypedDict):
    items: list[CloudflowDict]
    page_token: NotRequired[str | None]
    row_count: NotRequired[int | None]
