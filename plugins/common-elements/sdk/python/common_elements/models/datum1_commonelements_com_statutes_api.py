from __future__ import annotations

from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, SdkBaseModel


class Datum1CommonelementsComStatutesApi(SdkBaseModel):
    id: Optional[UUID] = UNSET
    """Statute section id."""

    chapter_number: OptionalNullable[str] = UNSET
    """The chapter this section belongs to."""

    chapter_title: OptionalNullable[str] = UNSET
    """The chapter this section belongs to."""

    section_number: OptionalNullable[str] = UNSET
    """Section numbering as published."""

    subsection: OptionalNullable[str] = UNSET
    """Section numbering as published."""

    slug: Optional[str] = UNSET
    """Slug for the public statute page."""

    title: OptionalNullable[str] = UNSET
    """Section title and plain-language summary."""

    summary: OptionalNullable[str] = UNSET
    """Section title and plain-language summary."""

    topics: Optional[list[str]] = UNSET
    """Tagged topics for this section."""

    citation: OptionalNullable[str] = UNSET
    """Formatted legal citation, e.g. "Fla. Stat. § 718.112"."""

    effective_date: OptionalNullable[Date] = UNSET
    """When this version took effect."""

    source_url: OptionalNullable[str] = UNSET
    """Link to the official published text."""


class Datum1CommonelementsComStatutesApiDict(TypedDict):
    id: NotRequired[UUID]
    chapter_number: NotRequired[str | None]
    chapter_title: NotRequired[str | None]
    section_number: NotRequired[str | None]
    subsection: NotRequired[str | None]
    slug: NotRequired[str]
    title: NotRequired[str | None]
    summary: NotRequired[str | None]
    topics: NotRequired[list[str]]
    citation: NotRequired[str | None]
    effective_date: NotRequired[Date | None]
    source_url: NotRequired[str | None]
