from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .citation_pill import CitationPill, CitationPillDict
from .map import Map, MapDict
from .shopping_card import ShoppingCard, ShoppingCardDict
from .source import Source, SourceDict


class Result(SdkBaseModel):
    """Copilot response data"""

    text: Optional[str] = UNSET
    """Copilot's response text"""

    html: Optional[str] = UNSET
    """A URL to the full HTML of the response."""

    sources: Optional[list[Source]] = UNSET
    """Array of sources referenced in the response"""

    citation_pills: Optional[list[CitationPill]] = Field(default=UNSET, alias="citationPills")
    """Inline citation pills extracted from the Copilot answer. Each entry is one (pill, source) pair: when a pill cites
    N sources (consecutive citation events grouped into a single chip), the array contains N entries sharing the same
    ``citationPillId`` but carrying per-source ``label``, ``url``, and ``domain``. Group by ``citationPillId`` to
    recover the pill-level structure. Omitted from ``result`` when the answer carries no pills."""

    shopping_cards: Optional[list[ShoppingCard]] = Field(default=UNSET, alias="shoppingCards")
    """Array of shopping/product cards extracted from the response (when available)"""

    map: Optional[list[Map]] = UNSET
    """Array of business/place map entries extracted from the response (when available)"""

    search_queries: Optional[list[str]] = Field(default=UNSET, alias="searchQueries")
    """Array of query fan-out — the web search queries Copilot ran while generating the response. Automatically included
    when at least one is available, no surcharge."""

    markdown: Optional[str] = UNSET
    """Copilot's response formatted in Markdown (included when include.markdown is true)"""

    raw_response: Optional[list[Any]] = Field(default=UNSET, alias="rawResponse")
    """Raw upstream provider stream captured during the request. Each item is one chunk from the provider's wire
    protocol (SSE event, batchexecute frame, etc.). Format is provider-specific, undocumented, and may change without
    notice — use it for debugging or to access data not yet surfaced in the structured fields above."""


class ResultDict(TypedDict):
    text: NotRequired[str]
    html: NotRequired[str]
    sources: NotRequired[list[SourceDict]]
    citation_pills: NotRequired[list[CitationPillDict]]
    shopping_cards: NotRequired[list[ShoppingCardDict]]
    map: NotRequired[list[MapDict]]
    search_queries: NotRequired[list[str]]
    markdown: NotRequired[str]
    raw_response: NotRequired[list[Any]]
