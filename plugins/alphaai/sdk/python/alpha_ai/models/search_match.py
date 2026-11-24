from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class SearchMatch(SdkBaseModel):
    """How an article matched a ``/api/news/search/`` query."""

    score: Optional[float] = UNSET
    """The engine's ranking score for this row. Comparable within one response only, never across queries or engine
    versions."""

    terms_matched: OptionalNullable[int] = UNSET
    """In ``broadened`` mode, how many of the query's words this row carries (at least two); ``null`` in ``strict``
    mode, where every word matched."""

    context: OptionalNullable[str] = UNSET
    """A fragment of the summary around the matched words, each wrapped in ``**…**``; ``null`` when the match lies in
    the title or the entity names only."""


class SearchMatchDict(TypedDict):
    score: NotRequired[float]
    terms_matched: NotRequired[int | None]
    context: NotRequired[str | None]
