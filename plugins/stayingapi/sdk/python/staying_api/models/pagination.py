from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class Pagination(SdkBaseModel):
    limit: Optional[int] = UNSET
    cursor: OptionalNullable[str] = UNSET
    next_cursor: OptionalNullable[str] = Field(default=UNSET, alias="nextCursor")
    """Opaque base64 cursor for the next page; null on the last page."""

    has_more: Optional[bool] = Field(default=UNSET, alias="hasMore")


class PaginationDict(TypedDict):
    limit: NotRequired[int]
    cursor: NotRequired[str | None]
    next_cursor: NotRequired[str | None]
    has_more: NotRequired[bool]
