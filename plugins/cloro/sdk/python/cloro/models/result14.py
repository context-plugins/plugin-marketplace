from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .citation_pill11 import CitationPill11, CitationPill11Dict
from .source18 import Source18, Source18Dict


class Result14(SdkBaseModel):
    """Bing AI Mode response data"""

    text: str
    """Bing AI Mode's answer as plain text, without citation chips"""

    sources: list[Source18]
    """Sources for the answer: first the pages Bing read, then any other page that a citation chip links. Empty when the
    answer has no sources."""

    citation_pills: list[CitationPill11] = Field(alias="citationPills")
    """Inline citation chips in the answer. Each entry is one (chip, source) pair: when a chip cites N sources, the
    array has N entries with the same ``citationPillId``. Group by ``citationPillId`` to get the chips. Empty when the
    answer has no chips."""

    markdown: Optional[str] = UNSET
    """The answer formatted in Markdown, with citations as links (included when include.markdown is true)"""

    html: Optional[str] = UNSET
    """A URL to the full HTML of the page that Bing rendered (included when include.html is true)."""


class Result14Dict(TypedDict):
    text: str
    sources: list[Source18Dict]
    citation_pills: list[CitationPill11Dict]
    markdown: NotRequired[str]
    html: NotRequired[str]
