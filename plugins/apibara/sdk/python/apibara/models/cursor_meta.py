from __future__ import annotations

from typing import Any

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class CursorMeta(SdkBaseModel):
    """Cursor pagination metadata."""

    per_page: int
    next_cursor: str | None
    prev_cursor: str | None
    has_more: Optional[bool] = UNSET
    """True when next_cursor is available."""

    total: OptionalNullable[int] = UNSET
    """Exact filtered row count when include_total=true; otherwise null."""

    total_is_exact: OptionalNullable[bool] = UNSET
    """True when total was requested and computed exactly."""

    applied_filters: Optional[Any] = UNSET
    """Normalized/requested filters applied to this list query."""

    unknown_filters: Optional[list[str]] = UNSET
    """Unrecognized query keys. Non-empty means the client sent parameters outside the supported contract."""


class CursorMetaDict(TypedDict):
    per_page: int
    next_cursor: str | None
    prev_cursor: str | None
    has_more: NotRequired[bool]
    total: NotRequired[int | None]
    total_is_exact: NotRequired[bool | None]
    applied_filters: NotRequired[Any]
    unknown_filters: NotRequired[list[str]]
