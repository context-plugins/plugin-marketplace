from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class AgentSearchRequest(SdkBaseModel):
    content_types: OptionalNullable[list[str]] = UNSET
    """e.g. ``government_meeting``, ``court_hearing``, ``podcast_episode``."""

    date_from: OptionalNullable[str] = UNSET
    """YYYY-MM-DD."""

    date_to: OptionalNullable[str] = UNSET
    """YYYY-MM-DD."""

    limit: OptionalNullable[int] = UNSET
    """1–10 results (default 5)."""

    query: str
    """What to find, 1–300 characters."""

    search_type: OptionalNullable[str] = UNSET
    """``text`` (default) or ``semantic``."""


class AgentSearchRequestDict(TypedDict):
    content_types: NotRequired[list[str] | None]
    date_from: NotRequired[str | None]
    date_to: NotRequired[str | None]
    limit: NotRequired[int | None]
    query: str
    search_type: NotRequired[str | None]
