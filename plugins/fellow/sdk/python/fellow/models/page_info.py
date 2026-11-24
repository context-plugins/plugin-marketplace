from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class PageInfo(SdkBaseModel):
    """Information about a page returned in a paginated response."""

    cursor: OptionalNullable[str] = UNSET
    page_size: int


class PageInfoDict(TypedDict):
    cursor: NotRequired[str | None]
    page_size: int
