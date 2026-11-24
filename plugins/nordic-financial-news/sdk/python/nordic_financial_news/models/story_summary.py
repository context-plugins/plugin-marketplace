from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .category1 import Category1, Category1Dict


class StorySummary(SdkBaseModel):
    id: str
    """Unique story identifier"""

    title: str
    """Story title"""

    summary: str
    """Story summary"""

    article_count: int
    """Number of articles in this story (matches the length of article_ids)"""

    published_at: RFC3339DateTime
    """When the story's newest source article was published (ISO 8601). This is editorial time, not the time the story
    reached this API: a story about older news carries an older date. Use it to filter by when news happened, never to
    track what is new to you."""

    updated_at: RFC3339DateTime
    """When this record last changed (ISO 8601). This is the clock incremental sync runs on. It only ever moves forward,
    unlike published_at. To sync: pass your last completed sync time as ``updated_after``, drain every page via
    ``pagination.next_cursor``, and only then advance your stored timestamp."""

    article_ids: Optional[list[str]] = UNSET
    """IDs of articles in this story, most relevant first"""

    country: OptionalNullable[str] = UNSET
    """Country code (ISO 3166-1 alpha-2)"""

    company_ids: Optional[list[str]] = UNSET
    """IDs of companies mentioned in this story"""

    category: Optional[Category1] = UNSET
    """Story category"""

    event_id: OptionalNullable[str] = UNSET
    """ID of the event this story was generated from. An event that has since been merged or removed still answers ``GET
    /events/{id}`` with a tombstone rather than a 404."""


class StorySummaryDict(TypedDict):
    id: str
    title: str
    summary: str
    article_count: int
    published_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    article_ids: NotRequired[list[str]]
    country: NotRequired[str | None]
    company_ids: NotRequired[list[str]]
    category: NotRequired[Category1Dict]
    event_id: NotRequired[str | None]
