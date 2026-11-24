from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel


class DatumCommonelementsComStatutesApi(SdkBaseModel):
    section_id: Optional[UUID] = UNSET
    """Statute section id, for use with /v1/statutes/sections/{id}."""

    chapter_slug: Optional[str] = UNSET
    """The chapter this section belongs to."""

    chapter_short_title: Optional[str] = UNSET
    """The chapter this section belongs to."""

    chapter_jurisdiction: Optional[str] = UNSET
    """The chapter this section belongs to."""

    chapter_number: Optional[str] = UNSET
    """The chapter this section belongs to."""

    section_number: OptionalNullable[str] = UNSET
    """Section numbering as published."""

    subsection: OptionalNullable[str] = UNSET
    """Section numbering as published."""

    section_slug: Optional[str] = UNSET
    """Slug for the public statute page."""

    title: OptionalNullable[str] = UNSET
    """Section title and plain-language summary."""

    summary: OptionalNullable[str] = UNSET
    """Section title and plain-language summary."""

    snippet: OptionalNullable[str] = UNSET
    """Search-result highlight from the matched text."""

    rank: Optional[float] = UNSET
    """Relevance score. Results are pre-sorted by this, highest first."""


class DatumCommonelementsComStatutesApiDict(TypedDict):
    section_id: NotRequired[UUID]
    chapter_slug: NotRequired[str]
    chapter_short_title: NotRequired[str]
    chapter_jurisdiction: NotRequired[str]
    chapter_number: NotRequired[str]
    section_number: NotRequired[str | None]
    subsection: NotRequired[str | None]
    section_slug: NotRequired[str]
    title: NotRequired[str | None]
    summary: NotRequired[str | None]
    snippet: NotRequired[str | None]
    rank: NotRequired[float]
