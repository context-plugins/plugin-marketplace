from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class SearchFilters(SdkBaseModel):
    content_types: OptionalNullable[list[str]] = UNSET
    """Restrict to content types (``phone_call``, ``meeting``, ``interview``, ``government_meeting``,
    ``podcast_episode``, ...) — the typed audio axis."""

    date_from: OptionalNullable[str] = UNSET
    """Filter by publish date (ISO 8601 format: "2024-01-01" or "2024-01-01T00:00:00Z")."""

    date_to: OptionalNullable[str] = UNSET
    """Filter by publish date (ISO 8601 format: "2024-12-31" or "2024-12-31T23:59:59Z")."""

    podcast_ids: OptionalNullable[list[str]] = UNSET
    """Restrict to specific podcast IDs."""

    speakers: OptionalNullable[list[str]] = UNSET
    """Restrict to specific speakers (exact match on speaker name)."""

    visibility: OptionalNullable[str] = UNSET
    """Tenancy scope: ``all`` (default: the public corpus plus your own data) | ``public`` (the public corpus only) |
    ``workspace`` (your own data only; with an API key, the key's workspace). It only narrows what you may read, never
    widens it; any other value is a 400. ``workspace`` also relaxes the short-segment floor and scopes semantic
    retrieval."""


class SearchFiltersDict(TypedDict):
    content_types: NotRequired[list[str] | None]
    date_from: NotRequired[str | None]
    date_to: NotRequired[str | None]
    podcast_ids: NotRequired[list[str] | None]
    speakers: NotRequired[list[str] | None]
    visibility: NotRequired[str | None]
