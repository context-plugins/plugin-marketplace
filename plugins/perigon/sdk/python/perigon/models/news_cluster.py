from __future__ import annotations

from typing import TYPE_CHECKING, Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .category_holder import CategoryHolder, CategoryHolderDict
from .company_count import CompanyCount, CompanyCountDict
from .company_holder import CompanyHolder, CompanyHolderDict
from .key_point import KeyPoint, KeyPointDict
from .location_count import LocationCount, LocationCountDict
from .location_holder import LocationHolder, LocationHolderDict
from .person_count import PersonCount, PersonCountDict
from .person_holder import PersonHolder, PersonHolderDict
from .question import Question, QuestionDict
from .record_stat_holder import RecordStatHolder, RecordStatHolderDict
from .sentiment_holder import SentimentHolder, SentimentHolderDict
from .source_holder import SourceHolder, SourceHolderDict
from .topic_holder import TopicHolder, TopicHolderDict

if TYPE_CHECKING:
    from .article import Article, ArticleDict


class NewsCluster(SdkBaseModel):
    """Expanded story cluster details, when requested and available."""

    created_at: OptionalNullable[str] = Field(default=UNSET, alias="createdAt")
    """Date and time the story was created, in ISO 8601 format."""

    updated_at: OptionalNullable[str] = Field(default=UNSET, alias="updatedAt")
    """Date and time the story was last updated, in ISO 8601 format."""

    initialized_at: OptionalNullable[str] = Field(default=UNSET, alias="initializedAt")
    """Date and time the story became initialized and visible, in ISO 8601 format."""

    id: OptionalNullable[str] = UNSET
    """Unique identifier for the story cluster."""

    duplicate_of: OptionalNullable[str] = Field(default=UNSET, alias="duplicateOf")
    """Identifier of the original story when this story is a duplicate."""

    slug: OptionalNullable[str] = UNSET
    """URL-safe identifier for the story."""

    name: OptionalNullable[str] = UNSET
    """Generated story title."""

    summary: OptionalNullable[str] = UNSET
    """Generated story summary."""

    short_summary: OptionalNullable[str] = Field(default=UNSET, alias="shortSummary")
    """Short generated story summary, when available."""

    summary_references: OptionalNullable[list[str]] = Field(default=UNSET, alias="summaryReferences")
    """Article IDs supporting the story summary."""

    image_source: Optional[SourceHolder] = Field(default=UNSET, alias="imageSource")
    image_url: OptionalNullable[str] = Field(default=UNSET, alias="imageUrl")
    """Primary image URL selected for the story."""

    key_points: OptionalNullable[list[KeyPoint]] = Field(default=UNSET, alias="keyPoints")
    """Key facts and developments identified in the story."""

    questions: OptionalNullable[list[Question]] = UNSET
    """Questions and answers generated from the story content."""

    unique_sources: OptionalNullable[list[str]] = Field(default=UNSET, alias="uniqueSources")
    """Distinct publisher domains represented in the story."""

    selected_articles: OptionalNullable[list[Article]] = Field(default=UNSET, alias="selectedArticles")
    """Representative articles selected for the story."""

    sentiment: Optional[SentimentHolder] = UNSET
    unique_count: OptionalNullable[int] = Field(default=UNSET, alias="uniqueCount")
    """Number of unique articles in the story."""

    reprint_count: OptionalNullable[int] = Field(default=UNSET, alias="reprintCount")
    """Number of reprinted articles in the story."""

    total_count: OptionalNullable[int] = Field(default=UNSET, alias="totalCount")
    """Total article count including reprints."""

    countries: OptionalNullable[list[RecordStatHolder]] = UNSET
    """Countries associated with the story and their article counts."""

    top_countries: OptionalNullable[list[str]] = Field(default=UNSET, alias="topCountries")
    """Countries most strongly associated with the story."""

    topics: OptionalNullable[list[RecordStatHolder]] = UNSET
    """Topics associated with the story and their article counts."""

    top_topics: OptionalNullable[list[TopicHolder]] = Field(default=UNSET, alias="topTopics")
    """Topics most strongly associated with the story."""

    categories: OptionalNullable[list[RecordStatHolder]] = UNSET
    """Categories associated with the story and their article counts."""

    top_categories: OptionalNullable[list[CategoryHolder]] = Field(default=UNSET, alias="topCategories")
    """Categories most strongly associated with the story."""

    taxonomies: OptionalNullable[list[RecordStatHolder]] = UNSET
    """Google Content Categories associated with the story and their article counts."""

    top_taxonomies: OptionalNullable[list[CategoryHolder]] = Field(default=UNSET, alias="topTaxonomies")
    """Google Content Categories most strongly associated with the story."""

    people: OptionalNullable[list[PersonCount]] = UNSET
    """People associated with the story and their article counts."""

    top_people: OptionalNullable[list[PersonHolder]] = Field(default=UNSET, alias="topPeople")
    """People most strongly associated with the story."""

    companies: OptionalNullable[list[CompanyCount]] = UNSET
    """Companies associated with the story and their article counts."""

    top_companies: OptionalNullable[list[CompanyHolder]] = Field(default=UNSET, alias="topCompanies")
    """Companies most strongly associated with the story."""

    locations: OptionalNullable[list[LocationCount]] = UNSET
    """Locations associated with the story and their article counts."""

    top_locations: OptionalNullable[list[LocationHolder]] = Field(default=UNSET, alias="topLocations")
    """Locations most strongly associated with the story."""

    highlights: OptionalNullable[dict[str, Any]] = UNSET
    """Matched text fragments grouped by story field."""

    source_diversity: OptionalNullable[float] = Field(default=UNSET, alias="sourceDiversity")
    """Ratio of unique publisher domains to total articles in the story."""


class NewsClusterDict(TypedDict):
    created_at: NotRequired[str | None]
    updated_at: NotRequired[str | None]
    initialized_at: NotRequired[str | None]
    id: NotRequired[str | None]
    duplicate_of: NotRequired[str | None]
    slug: NotRequired[str | None]
    name: NotRequired[str | None]
    summary: NotRequired[str | None]
    short_summary: NotRequired[str | None]
    summary_references: NotRequired[list[str] | None]
    image_source: NotRequired[SourceHolderDict]
    image_url: NotRequired[str | None]
    key_points: NotRequired[list[KeyPointDict] | None]
    questions: NotRequired[list[QuestionDict] | None]
    unique_sources: NotRequired[list[str] | None]
    selected_articles: NotRequired[list[ArticleDict] | None]
    sentiment: NotRequired[SentimentHolderDict]
    unique_count: NotRequired[int | None]
    reprint_count: NotRequired[int | None]
    total_count: NotRequired[int | None]
    countries: NotRequired[list[RecordStatHolderDict] | None]
    top_countries: NotRequired[list[str] | None]
    topics: NotRequired[list[RecordStatHolderDict] | None]
    top_topics: NotRequired[list[TopicHolderDict] | None]
    categories: NotRequired[list[RecordStatHolderDict] | None]
    top_categories: NotRequired[list[CategoryHolderDict] | None]
    taxonomies: NotRequired[list[RecordStatHolderDict] | None]
    top_taxonomies: NotRequired[list[CategoryHolderDict] | None]
    people: NotRequired[list[PersonCountDict] | None]
    top_people: NotRequired[list[PersonHolderDict] | None]
    companies: NotRequired[list[CompanyCountDict] | None]
    top_companies: NotRequired[list[CompanyHolderDict] | None]
    locations: NotRequired[list[LocationCountDict] | None]
    top_locations: NotRequired[list[LocationHolderDict] | None]
    highlights: NotRequired[dict[str, Any] | None]
    source_diversity: NotRequired[float | None]
