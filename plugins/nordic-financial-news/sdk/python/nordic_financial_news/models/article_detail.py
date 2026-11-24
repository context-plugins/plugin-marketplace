from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, RFC3339DateTime, SdkBaseModel
from .category import Category, CategoryDict
from .company import Company, CompanyDict
from .enums.content_type import ContentTypeOrStr
from .source import Source, SourceDict


class ArticleDetail(SdkBaseModel):
    id: str
    """Unique article identifier"""

    title: str
    """Article title in English. Machine-translated when the source article is not in English."""

    article_url: str
    """Link to the original article"""

    content_type: ContentTypeOrStr
    """Type of article content"""

    published_at: RFC3339DateTime
    """When the article was published by its source (ISO 8601). This is editorial time, not the time the article reached
    this API. Use it to filter by when news happened, never to track what is new to you."""

    updated_at: RFC3339DateTime
    """When this record last changed (ISO 8601). This is the clock incremental sync runs on. It only ever moves forward,
    unlike published_at. To sync: pass your last completed sync time as ``updated_after``, drain every page via
    ``pagination.next_cursor``, and only then advance your stored timestamp."""

    category: Category
    """Article category"""

    source: Source
    """The news source that published this article"""

    company_ids: list[str]
    """IDs of companies mentioned in the article"""

    country: str | None
    """Country code (ISO 3166-1 alpha-2)"""

    event_id: OptionalNullable[str] = UNSET
    """ID of the event this article belongs to. Null when the article has not been assigned to an event yet. An event
    that has since been merged or removed still answers ``GET /events/{id}`` with a tombstone rather than a 404."""

    source_title: Optional[str] = UNSET
    """Original article title in source language"""

    summary: Optional[str] = UNSET
    """AI-generated English summary of the article: a machine translation and paraphrase of the source text, not
    verbatim."""

    story_ids: Optional[list[str]] = UNSET
    """IDs of published stories covering this article, if any"""

    companies: Optional[list[Company]] = UNSET
    """Companies mentioned in this article, primary company first"""

    key_points: Optional[list[str]] = UNSET
    """Key points from the article. Machine-generated English paraphrases of statements in the source article, not
    verbatim quotations."""


class ArticleDetailDict(TypedDict):
    id: str
    title: str
    article_url: str
    content_type: ContentTypeOrStr
    published_at: RFC3339DateTime
    updated_at: RFC3339DateTime
    category: CategoryDict
    source: SourceDict
    company_ids: list[str]
    country: str | None
    event_id: NotRequired[str | None]
    source_title: NotRequired[str]
    summary: NotRequired[str]
    story_ids: NotRequired[list[str]]
    companies: NotRequired[list[CompanyDict]]
    key_points: NotRequired[list[str]]
