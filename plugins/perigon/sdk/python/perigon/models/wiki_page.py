from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .wiki_page_section_holder import WikiPageSectionHolder, WikiPageSectionHolderDict
from .wikidata_label_holder import WikidataLabelHolder, WikidataLabelHolderDict


class WikiPage(SdkBaseModel):
    id: OptionalNullable[str] = UNSET
    scraped_at: OptionalNullable[str] = Field(default=UNSET, alias="scrapedAt")
    wiki_page_id: OptionalNullable[int] = Field(default=UNSET, alias="wikiPageId")
    wiki_revision_id: OptionalNullable[int] = Field(default=UNSET, alias="wikiRevisionId")
    wiki_revision_ts: OptionalNullable[str] = Field(default=UNSET, alias="wikiRevisionTs")
    wiki_code: OptionalNullable[str] = Field(default=UNSET, alias="wikiCode")
    wiki_namespace: OptionalNullable[int] = Field(default=UNSET, alias="wikiNamespace")
    wiki_title: OptionalNullable[str] = Field(default=UNSET, alias="wikiTitle")
    url: OptionalNullable[str] = UNSET
    top_image: OptionalNullable[str] = Field(default=UNSET, alias="topImage")
    wikidata_id: OptionalNullable[str] = Field(default=UNSET, alias="wikidataId")
    wikidata_instance_of: OptionalNullable[list[WikidataLabelHolder]] = Field(default=UNSET, alias="wikidataInstanceOf")
    redirect_titles: OptionalNullable[list[str]] = Field(default=UNSET, alias="redirectTitles")
    summary: OptionalNullable[str] = UNSET
    sections: OptionalNullable[list[WikiPageSectionHolder]] = UNSET
    categories: OptionalNullable[list[str]] = UNSET
    external_links: OptionalNullable[list[str]] = Field(default=UNSET, alias="externalLinks")
    references: OptionalNullable[list[str]] = UNSET
    pageviews: OptionalNullable[int] = UNSET


class WikiPageDict(TypedDict):
    id: NotRequired[str | None]
    scraped_at: NotRequired[str | None]
    wiki_page_id: NotRequired[int | None]
    wiki_revision_id: NotRequired[int | None]
    wiki_revision_ts: NotRequired[str | None]
    wiki_code: NotRequired[str | None]
    wiki_namespace: NotRequired[int | None]
    wiki_title: NotRequired[str | None]
    url: NotRequired[str | None]
    top_image: NotRequired[str | None]
    wikidata_id: NotRequired[str | None]
    wikidata_instance_of: NotRequired[list[WikidataLabelHolderDict] | None]
    redirect_titles: NotRequired[list[str] | None]
    summary: NotRequired[str | None]
    sections: NotRequired[list[WikiPageSectionHolderDict] | None]
    categories: NotRequired[list[str] | None]
    external_links: NotRequired[list[str] | None]
    references: NotRequired[list[str] | None]
    pageviews: NotRequired[int | None]
