from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .cloudflow_template import CloudflowTemplate, CloudflowTemplateDict


class CloudflowTemplateListResponse(SdkBaseModel):
    """Cursor-paginated list of CloudFlow templates."""

    items: list[CloudflowTemplate]
    page_token: OptionalNullable[str] = Field(default=UNSET, alias="pageToken")
    """Opaque cursor for the next page. ``null`` when there are no more results."""

    row_count: OptionalNullable[int] = Field(default=UNSET, alias="rowCount")
    """Total number of templates matching the current query."""


class CloudflowTemplateListResponseDict(TypedDict):
    items: list[CloudflowTemplateDict]
    page_token: NotRequired[str | None]
    row_count: NotRequired[int | None]
