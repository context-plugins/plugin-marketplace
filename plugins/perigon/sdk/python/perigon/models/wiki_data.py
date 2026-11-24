from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .wikidata_label_holder import WikidataLabelHolder, WikidataLabelHolderDict


class WikiData(SdkBaseModel):
    page_id: OptionalNullable[str] = Field(default=UNSET, alias="pageId")
    section_id: OptionalNullable[str] = Field(default=UNSET, alias="sectionId")
    wiki_page_id: OptionalNullable[int] = Field(default=UNSET, alias="wikiPageId")
    wiki_revision_id: OptionalNullable[int] = Field(default=UNSET, alias="wikiRevisionId")
    wiki_revision_ts: OptionalNullable[str] = Field(default=UNSET, alias="wikiRevisionTs")
    wiki_code: OptionalNullable[str] = Field(default=UNSET, alias="wikiCode")
    wiki_namespace: OptionalNullable[int] = Field(default=UNSET, alias="wikiNamespace")
    wiki_title: OptionalNullable[str] = Field(default=UNSET, alias="wikiTitle")
    wikidata_id: OptionalNullable[str] = Field(default=UNSET, alias="wikidataId")
    wikidata_instance_of: OptionalNullable[list[WikidataLabelHolder]] = Field(default=UNSET, alias="wikidataInstanceOf")
    redirect_titles: OptionalNullable[list[str]] = Field(default=UNSET, alias="redirectTitles")
    pageviews: OptionalNullable[int] = UNSET
    title: OptionalNullable[str] = UNSET
    style_level: OptionalNullable[int] = Field(default=UNSET, alias="styleLevel")
    content: OptionalNullable[str] = UNSET


class WikiDataDict(TypedDict):
    page_id: NotRequired[str | None]
    section_id: NotRequired[str | None]
    wiki_page_id: NotRequired[int | None]
    wiki_revision_id: NotRequired[int | None]
    wiki_revision_ts: NotRequired[str | None]
    wiki_code: NotRequired[str | None]
    wiki_namespace: NotRequired[int | None]
    wiki_title: NotRequired[str | None]
    wikidata_id: NotRequired[str | None]
    wikidata_instance_of: NotRequired[list[WikidataLabelHolderDict] | None]
    redirect_titles: NotRequired[list[str] | None]
    pageviews: NotRequired[int | None]
    title: NotRequired[str | None]
    style_level: NotRequired[int | None]
    content: NotRequired[str | None]
