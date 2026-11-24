from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class WikipediaSearchFilter(SdkBaseModel):
    """Complex filter structure for Wikipedia page searches that supports nested logical operations (AND, OR, NOT) and
    multiple filtering criteria."""

    page_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="pageId")
    """Filter by specific Perigon page identifiers. Accepts either a single ID or an array of IDs. Returns only pages
    matching these IDs."""

    section_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="sectionId")
    """Filter by specific section identifiers. Accepts either a single ID or an array of IDs. Returns only pages
    containing these sections."""

    wiki_page_id: OptionalNullable[list[int]] = Field(default=UNSET, alias="wikiPageId")
    """Filter by specific Wikipedia page identifiers. Accepts either a single ID or an array of IDs. Returns only pages
    matching these IDs."""

    wiki_revision_id: OptionalNullable[list[int]] = Field(default=UNSET, alias="wikiRevisionId")
    """Filter by specific Perigon page revision identifiers. Accepts either a single ID or an array of IDs. Returns only
    pages matching these IDs."""

    wiki_code: OptionalNullable[list[str]] = Field(default=UNSET, alias="wikiCode")
    """Filter by specific Wikipedia project codes. Returns only pages matching these projects."""

    wiki_namespace: OptionalNullable[list[int]] = Field(default=UNSET, alias="wikiNamespace")
    """Filter by specific Wikipedia namespaces. Returns only pages matching these namespaces."""

    wikidata_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="wikidataId")
    """Filter by specific Wikidata entity IDs. Returns only pages whose Wikidata entities match those ids."""

    wikidata_instance_of_id: OptionalNullable[list[str]] = Field(default=UNSET, alias="wikidataInstanceOfId")
    """Filter by specific Wikidata entity IDs. Returns only pages whose Wikidata entities are instances of provided
    ids."""

    wikidata_instance_of_label: OptionalNullable[list[str]] = Field(default=UNSET, alias="wikidataInstanceOfLabel")
    """Filter by specific Wikidata entity labels. Returns only pages whose Wikidata entities are instances of these
    labels."""

    and_: OptionalNullable[list[WikipediaSearchFilter]] = Field(default=UNSET, alias="AND")
    """Adds additional AND filter objects. These objects must be of the same type as the original filter object and will
    be combined with the existing filter using the AND logical operator."""

    or_: OptionalNullable[list[WikipediaSearchFilter]] = Field(default=UNSET, alias="OR")
    """Adds additional OR filter objects. These objects must be of the same type as the original filter object and will
    be combined with the existing filter using the OR logical operator."""

    not_: OptionalNullable[list[WikipediaSearchFilter]] = Field(default=UNSET, alias="NOT")
    """A filter object for logical NOT operations"""


class WikipediaSearchFilterDict(TypedDict):
    page_id: NotRequired[list[str] | None]
    section_id: NotRequired[list[str] | None]
    wiki_page_id: NotRequired[list[int] | None]
    wiki_revision_id: NotRequired[list[int] | None]
    wiki_code: NotRequired[list[str] | None]
    wiki_namespace: NotRequired[list[int] | None]
    wikidata_id: NotRequired[list[str] | None]
    wikidata_instance_of_id: NotRequired[list[str] | None]
    wikidata_instance_of_label: NotRequired[list[str] | None]
    and_: NotRequired[list[WikipediaSearchFilterDict] | None]
    or_: NotRequired[list[WikipediaSearchFilterDict] | None]
    not_: NotRequired[list[WikipediaSearchFilterDict] | None]
