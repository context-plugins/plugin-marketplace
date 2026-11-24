from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.type3 import Type3OrStr


class CitationPill5(SdkBaseModel):
    url: str
    """The URL of the citation"""

    label: str
    """Per-source title of the citation. Always present; may be an empty string when the citation event ships no title —
    read ``domain`` / ``url`` for source identity in that case."""

    description: Optional[str] = UNSET
    """Description of the citation content. Omitted when the citation event carries no snippet (e.g. grouped-webpage
    title-only cards)."""

    domain: str
    """Domain of the citation source"""

    date_published: Optional[str] = Field(default=UNSET, alias="datePublished")
    """ISO 8601 date string of when the source was published. Omitted when the citation event carries no publication
    date."""

    citation_pill_id: int = Field(alias="citationPillId")
    """0-based identifier shared by all entries from the same chip. Group by ``citationPillId`` to recover the
    pill-level structure. **Note:** unlike the other providers (Google AIO, AI Mode, Copilot, Perplexity, Gemini) which
    use 1-based ``citationPillId``, ChatGPT's IDs start at 0 for historical reasons."""

    type_: Type3OrStr = Field(alias="type")
    """Discriminator for the underlying citation event: ``searchResult`` for inline search citations, ``groupedWebpage``
    for grouped-webpage cards."""

    position: int
    """1-based position of this source in the sibling ``result.sources`` array."""


class CitationPill5Dict(TypedDict):
    url: str
    label: str
    description: NotRequired[str]
    domain: str
    date_published: NotRequired[str]
    citation_pill_id: int
    type_: Type3OrStr
    position: int
