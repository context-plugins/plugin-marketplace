from __future__ import annotations

from typing import Any
from uuid import UUID

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, OptionalNullable, SdkBaseModel


class DataCommonelementsComStatutesApi(SdkBaseModel):
    section_id: Optional[UUID] = UNSET
    """Statute section id."""

    section_number: OptionalNullable[str] = UNSET
    """Section numbering as published."""

    subsection: OptionalNullable[str] = UNSET
    """Section numbering as published."""

    title: OptionalNullable[str] = UNSET
    """Section title and plain-language summary."""

    summary: OptionalNullable[str] = UNSET
    """Section title and plain-language summary."""

    body_text: Optional[str] = UNSET
    """Full text of the section."""

    topics: Optional[list[str]] = UNSET
    """Tagged topics for this section."""

    effective_date: OptionalNullable[Date] = UNSET
    """Effective date and link to the official published text."""

    source_url: OptionalNullable[Date] = UNSET
    """Effective date and link to the official published text."""

    chapter: Optional[Any] = UNSET
    """id, slug, jurisdiction, chapter_number, short_title, citation_format for the parent chapter."""

    citation: Optional[str] = UNSET
    """Formatted legal citation for this exact section."""


class DataCommonelementsComStatutesApiDict(TypedDict):
    section_id: NotRequired[UUID]
    section_number: NotRequired[str | None]
    subsection: NotRequired[str | None]
    title: NotRequired[str | None]
    summary: NotRequired[str | None]
    body_text: NotRequired[str]
    topics: NotRequired[list[str]]
    effective_date: NotRequired[Date | None]
    source_url: NotRequired[Date | None]
    chapter: NotRequired[Any]
    citation: NotRequired[str]
