from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class SearchMeta(SdkBaseModel):
    has_more: bool
    limit: int
    offset: int
    query: str
    sort_scope: OptionalNullable[str] = UNSET
    """GH#423: present when sort.field=date was honored. "global" = the whole match set was date-ordered server-side
    (text search); "retrieved_window" = the similarity-retrieved window was date-ordered (semantic/hybrid, where a
    global date order isn't defined for kNN retrieval)."""

    took_ms: int
    total: int


class SearchMetaDict(TypedDict):
    has_more: bool
    limit: int
    offset: int
    query: str
    sort_scope: NotRequired[str | None]
    took_ms: int
    total: int
