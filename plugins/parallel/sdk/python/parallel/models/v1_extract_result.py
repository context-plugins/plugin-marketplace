from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class V1ExtractResult(SdkBaseModel):
    """Extract result for a single URL."""

    url: str
    """URL associated with the search result."""

    title: Optional[str] = UNSET
    """Title of the webpage, if available."""

    publish_date: Optional[str] = UNSET
    """Publish date of the webpage in YYYY-MM-DD format, if available."""

    excerpts: list[str]
    """Relevant excerpted content from the URL, formatted as markdown."""

    full_content: Optional[str] = UNSET
    """Full content from the URL formatted as markdown, if requested."""


class V1ExtractResultDict(TypedDict):
    url: str
    title: NotRequired[str]
    publish_date: NotRequired[str]
    excerpts: list[str]
    full_content: NotRequired[str]
