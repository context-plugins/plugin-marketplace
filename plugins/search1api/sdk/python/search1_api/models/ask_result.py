from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AskResult(SdkBaseModel):
    title: str
    link: str
    snippet: str
    published_date: Optional[str] = UNSET
    """When the page was published, as ISO 8601 (``YYYY-MM-DD`` or ``YYYY-MM-DDTHH:MM:SSZ``). Omitted when the engine
    exposes no date."""

    source: str
    """Engine that returned the result."""

    relevance: float
    """How likely the result is to be about the query, two decimals. Only results scoring at least 0.5 are returned."""


class AskResultDict(TypedDict):
    title: str
    link: str
    snippet: str
    published_date: NotRequired[str]
    source: str
    relevance: float
