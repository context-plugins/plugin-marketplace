from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .enums.mode import ModeOrStr
from .enums.sort import SortOrStr


class NewsSearchQueryInfo(SdkBaseModel):
    """How ``/api/news/search/`` read the query."""

    mode: ModeOrStr
    """See the endpoint description."""

    sort: SortOrStr
    """``relevance`` (ranked) or ``published`` (newest first) — the latter when every word is too common to rank on."""

    terms: list[str]
    """The normalized words that were searched."""

    required_terms: Optional[list[str]] = UNSET
    """In ``broadened`` mode, the words at least one of which every row carries, when the search reports them; empty
    otherwise (the current engine does not — ``search_match.terms_matched`` on each item is the count to trust)."""

    optional_terms: Optional[list[str]] = UNSET
    window_from: OptionalNullable[RFC3339DateTime] = UNSET
    """Start of the searched window (your archive horizon, or ``from_date`` if later)."""

    note: Optional[str] = UNSET
    """One sentence for an agent to act on — what selected the rows, and what they are not."""


class NewsSearchQueryInfoDict(TypedDict):
    mode: ModeOrStr
    sort: SortOrStr
    terms: list[str]
    required_terms: NotRequired[list[str]]
    optional_terms: NotRequired[list[str]]
    window_from: NotRequired[RFC3339DateTime | None]
    note: NotRequired[str]
