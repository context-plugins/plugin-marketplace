from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .category_holder import CategoryHolder, CategoryHolderDict
from .category_with_score_holder import CategoryWithScoreHolder, CategoryWithScoreHolderDict
from .company_holder import CompanyHolder, CompanyHolderDict
from .entity_holder import EntityHolder, EntityHolderDict
from .event_type_holder import EventTypeHolder, EventTypeHolderDict
from .id_name_holder import IdNameHolder, IdNameHolderDict
from .journalist import Journalist, JournalistDict
from .keyword_holder import KeywordHolder, KeywordHolderDict
from .label_holder import LabelHolder, LabelHolderDict
from .location_holder import LocationHolder, LocationHolderDict
from .news_cluster import NewsCluster, NewsClusterDict
from .person_holder import PersonHolder, PersonHolderDict
from .place import Place, PlaceDict
from .sentiment_holder import SentimentHolder, SentimentHolderDict
from .source_holder import SourceHolder, SourceHolderDict
from .topic_holder import TopicHolder, TopicHolderDict
from .vector_data import VectorData, VectorDataDict


class Article(SdkBaseModel):
    url: OptionalNullable[str] = UNSET
    """Canonical URL of the article."""

    authors_byline: OptionalNullable[str] = Field(default=UNSET, alias="authorsByline")
    """Author byline as published by the source."""

    article_id: OptionalNullable[str] = Field(default=UNSET, alias="articleId")
    """Unique Perigon identifier for the article."""

    cluster_id: OptionalNullable[str] = Field(default=UNSET, alias="clusterId")
    """Identifier of the story cluster containing the article, when assigned."""

    source: Optional[SourceHolder] = UNSET
    image_url: OptionalNullable[str] = Field(default=UNSET, alias="imageUrl")
    """Primary image URL associated with the article."""

    country: OptionalNullable[str] = UNSET
    """Two-character country code associated with the article."""

    language: OptionalNullable[str] = UNSET
    """ISO 639 two-letter language code for the article."""

    pub_date: OptionalNullable[str] = Field(default=UNSET, alias="pubDate")
    """Date and time the article was published, in ISO 8601 format."""

    add_date: OptionalNullable[str] = Field(default=UNSET, alias="addDate")
    """Date and time the article was added to Perigon, in ISO 8601 format."""

    refresh_date: OptionalNullable[str] = Field(default=UNSET, alias="refreshDate")
    """Date and time the article was last refreshed by Perigon, in ISO 8601 format."""

    score: OptionalNullable[float] = UNSET
    """Search relevance score for the article, when applicable."""

    title: OptionalNullable[str] = UNSET
    """Article headline."""

    description: OptionalNullable[str] = UNSET
    """Article description or publisher-provided excerpt."""

    content: OptionalNullable[str] = UNSET
    """Full article body available to Perigon."""

    en_content_word_count: OptionalNullable[int] = Field(default=UNSET, alias="enContentWordCount")
    """Word count of the English article content, when available."""

    medium: OptionalNullable[str] = UNSET
    """Primary medium type, such as Article or Video."""

    links: OptionalNullable[list[str]] = UNSET
    """URLs linked from the article content."""

    labels: OptionalNullable[list[LabelHolder]] = UNSET
    """Editorial labels assigned to the article."""

    event_types: OptionalNullable[list[EventTypeHolder]] = Field(default=UNSET, alias="eventTypes")
    """Event types detected in the article."""

    matched_authors: OptionalNullable[list[IdNameHolder]] = Field(default=UNSET, alias="matchedAuthors")
    """Known journalist records matched to the article byline."""

    claim: OptionalNullable[str] = UNSET
    """Claim identified in fact-check content, when applicable."""

    verdict: OptionalNullable[str] = UNSET
    """Verdict identified in fact-check content, when applicable."""

    keywords: OptionalNullable[list[KeywordHolder]] = UNSET
    """Keywords extracted from the article with their relevance weights."""

    topics: OptionalNullable[list[TopicHolder]] = UNSET
    """Topics assigned to the article."""

    categories: OptionalNullable[list[CategoryHolder]] = UNSET
    """Broad content categories assigned to the article."""

    taxonomies: OptionalNullable[list[CategoryWithScoreHolder]] = UNSET
    """Google Content Categories assigned to the article with confidence scores."""

    entities: OptionalNullable[list[EntityHolder]] = UNSET
    """Named entities extracted from the article."""

    companies: OptionalNullable[list[CompanyHolder]] = UNSET
    """Companies identified in the article."""

    sentiment: Optional[SentimentHolder] = UNSET
    summary: OptionalNullable[str] = UNSET
    """Generated summary of the article, when available."""

    short_summary: OptionalNullable[str] = Field(default=UNSET, alias="shortSummary")
    """Short generated summary of the article, when available."""

    translation: OptionalNullable[str] = UNSET
    """Translated article content, when available."""

    translated_title: OptionalNullable[str] = Field(default=UNSET, alias="translatedTitle")
    """English translation of the article title, when available."""

    translated_description: OptionalNullable[str] = Field(default=UNSET, alias="translatedDescription")
    """English translation of the article description, when available."""

    translated_summary: OptionalNullable[str] = Field(default=UNSET, alias="translatedSummary")
    """English translation of the article summary, when available."""

    locations: OptionalNullable[list[LocationHolder]] = UNSET
    """Locations identified as central to the article."""

    reprint: OptionalNullable[bool] = UNSET
    """Whether the article is a reprint of previously published content."""

    reprint_group_id: OptionalNullable[str] = Field(default=UNSET, alias="reprintGroupId")
    """Identifier grouping the original article with its known reprints."""

    places: OptionalNullable[list[Place]] = UNSET
    """Structured geographic places extracted from the article."""

    people: OptionalNullable[list[PersonHolder]] = UNSET
    """Known people identified in the article."""

    cluster: Optional[NewsCluster] = UNSET
    journalists: OptionalNullable[list[Journalist]] = UNSET
    """Expanded journalist details, when requested and available."""

    highlights: OptionalNullable[dict[str, Any]] = UNSET
    """Matched text fragments grouped by article field."""

    vectors: OptionalNullable[list[VectorData]] = UNSET
    """Vector embeddings associated with the article, when requested."""


class ArticleDict(TypedDict):
    url: NotRequired[str | None]
    authors_byline: NotRequired[str | None]
    article_id: NotRequired[str | None]
    cluster_id: NotRequired[str | None]
    source: NotRequired[SourceHolderDict]
    image_url: NotRequired[str | None]
    country: NotRequired[str | None]
    language: NotRequired[str | None]
    pub_date: NotRequired[str | None]
    add_date: NotRequired[str | None]
    refresh_date: NotRequired[str | None]
    score: NotRequired[float | None]
    title: NotRequired[str | None]
    description: NotRequired[str | None]
    content: NotRequired[str | None]
    en_content_word_count: NotRequired[int | None]
    medium: NotRequired[str | None]
    links: NotRequired[list[str] | None]
    labels: NotRequired[list[LabelHolderDict] | None]
    event_types: NotRequired[list[EventTypeHolderDict] | None]
    matched_authors: NotRequired[list[IdNameHolderDict] | None]
    claim: NotRequired[str | None]
    verdict: NotRequired[str | None]
    keywords: NotRequired[list[KeywordHolderDict] | None]
    topics: NotRequired[list[TopicHolderDict] | None]
    categories: NotRequired[list[CategoryHolderDict] | None]
    taxonomies: NotRequired[list[CategoryWithScoreHolderDict] | None]
    entities: NotRequired[list[EntityHolderDict] | None]
    companies: NotRequired[list[CompanyHolderDict] | None]
    sentiment: NotRequired[SentimentHolderDict]
    summary: NotRequired[str | None]
    short_summary: NotRequired[str | None]
    translation: NotRequired[str | None]
    translated_title: NotRequired[str | None]
    translated_description: NotRequired[str | None]
    translated_summary: NotRequired[str | None]
    locations: NotRequired[list[LocationHolderDict] | None]
    reprint: NotRequired[bool | None]
    reprint_group_id: NotRequired[str | None]
    places: NotRequired[list[PlaceDict] | None]
    people: NotRequired[list[PersonHolderDict] | None]
    cluster: NotRequired[NewsClusterDict]
    journalists: NotRequired[list[JournalistDict] | None]
    highlights: NotRequired[dict[str, Any] | None]
    vectors: NotRequired[list[VectorDataDict] | None]
