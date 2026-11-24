from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .company_holder import CompanyHolder, CompanyHolderDict
from .entity_holder import EntityHolder, EntityHolderDict
from .id_name_holder import IdNameHolder, IdNameHolderDict
from .person_holder import PersonHolder, PersonHolderDict
from .source_holder import SourceHolder, SourceHolderDict


class ArticleRefreshData(SdkBaseModel):
    article_id: OptionalNullable[str] = Field(default=UNSET, alias="articleId")
    url: OptionalNullable[str] = UNSET
    authors_byline: OptionalNullable[str] = Field(default=UNSET, alias="authorsByline")
    image_url: OptionalNullable[str] = Field(default=UNSET, alias="imageUrl")
    country: OptionalNullable[str] = UNSET
    language: OptionalNullable[str] = UNSET
    pub_date: OptionalNullable[str] = Field(default=UNSET, alias="pubDate")
    title: OptionalNullable[str] = UNSET
    description: OptionalNullable[str] = UNSET
    content: OptionalNullable[str] = UNSET
    source: Optional[SourceHolder] = UNSET
    links: OptionalNullable[list[str]] = UNSET
    medium: OptionalNullable[str] = UNSET
    claim: OptionalNullable[str] = UNSET
    verdict: OptionalNullable[str] = UNSET
    translation: OptionalNullable[str] = UNSET
    translated_title: OptionalNullable[str] = Field(default=UNSET, alias="translatedTitle")
    translated_description: OptionalNullable[str] = Field(default=UNSET, alias="translatedDescription")
    entities: OptionalNullable[list[EntityHolder]] = UNSET
    people: OptionalNullable[list[PersonHolder]] = UNSET
    companies: OptionalNullable[list[CompanyHolder]] = UNSET
    matched_authors: OptionalNullable[list[IdNameHolder]] = Field(default=UNSET, alias="matchedAuthors")


class ArticleRefreshDataDict(TypedDict):
    article_id: NotRequired[str | None]
    url: NotRequired[str | None]
    authors_byline: NotRequired[str | None]
    image_url: NotRequired[str | None]
    country: NotRequired[str | None]
    language: NotRequired[str | None]
    pub_date: NotRequired[str | None]
    title: NotRequired[str | None]
    description: NotRequired[str | None]
    content: NotRequired[str | None]
    source: NotRequired[SourceHolderDict]
    links: NotRequired[list[str] | None]
    medium: NotRequired[str | None]
    claim: NotRequired[str | None]
    verdict: NotRequired[str | None]
    translation: NotRequired[str | None]
    translated_title: NotRequired[str | None]
    translated_description: NotRequired[str | None]
    entities: NotRequired[list[EntityHolderDict] | None]
    people: NotRequired[list[PersonHolderDict] | None]
    companies: NotRequired[list[CompanyHolderDict] | None]
    matched_authors: NotRequired[list[IdNameHolderDict] | None]
