from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Pagination(SdkBaseModel):
    """Cursor-based pagination metadata."""

    page_token: Optional[str] = Field(default=UNSET, alias="pageToken")
    """Token to retrieve the next page. Absent when there are no more pages."""

    row_count: int = Field(alias="rowCount")
    """Number of items in this page."""


class PaginationDict(TypedDict):
    page_token: NotRequired[str]
    row_count: int
