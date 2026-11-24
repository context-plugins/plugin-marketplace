from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .citation_pill2 import CitationPill2, CitationPill2Dict
from .hotel_item import HotelItem, HotelItemDict
from .media_item import MediaItem, MediaItemDict
from .place_item import PlaceItem, PlaceItemDict
from .shopping_card2 import ShoppingCard2, ShoppingCard2Dict
from .source import Source, SourceDict


class Result2(SdkBaseModel):
    """Perplexity response data"""

    text: Optional[str] = UNSET
    """Perplexity's response text"""

    html: Optional[str] = UNSET
    """A URL to the full HTML of the response."""

    sources: Optional[list[Source]] = UNSET
    """Array of sources referenced in the response"""

    citation_pills: Optional[list[CitationPill2]] = Field(default=UNSET, alias="citationPills")
    """Inline citation pills extracted from the Perplexity answer. Each entry is one (pill, source) pair: when a pill
    cites N sources (Perplexity's ``[1][2][3]`` bracketed groups), the array contains N entries sharing the same
    ``citationPillId`` but carrying per-source ``label``, ``url``, and ``domain``. Group by ``citationPillId`` to
    recover the pill-level structure. Omitted from ``result`` when the answer carries no pills."""

    markdown: Optional[str] = UNSET
    """Perplexity's response formatted in Markdown (included when include.markdown is true)"""

    related_queries: Optional[list[str]] = UNSET
    """Suggested follow-up search queries"""

    videos: Optional[list[MediaItem]] = UNSET
    """Video content found in response"""

    images: Optional[list[MediaItem]] = UNSET
    """Image content found in response"""

    hotels: Optional[list[HotelItem]] = UNSET
    """Hotel listings (when travel intent detected)"""

    places: Optional[list[PlaceItem]] = UNSET
    """General places and locations"""

    shopping_cards: Optional[list[ShoppingCard2]] = UNSET
    """Shopping product cards with detailed product information (when shopping intent detected)"""

    search_model_queries: Optional[list[str]] = UNSET
    """Internal search queries used to generate response"""

    raw_response: Optional[list[Any]] = Field(default=UNSET, alias="rawResponse")
    """Raw upstream provider stream captured during the request. Each item is one chunk from the provider's wire
    protocol (SSE event, batchexecute frame, etc.). Format is provider-specific, undocumented, and may change without
    notice — use it for debugging or to access data not yet surfaced in the structured fields above."""


class Result2Dict(TypedDict):
    text: NotRequired[str]
    html: NotRequired[str]
    sources: NotRequired[list[SourceDict]]
    citation_pills: NotRequired[list[CitationPill2Dict]]
    markdown: NotRequired[str]
    related_queries: NotRequired[list[str]]
    videos: NotRequired[list[MediaItemDict]]
    images: NotRequired[list[MediaItemDict]]
    hotels: NotRequired[list[HotelItemDict]]
    places: NotRequired[list[PlaceItemDict]]
    shopping_cards: NotRequired[list[ShoppingCard2Dict]]
    search_model_queries: NotRequired[list[str]]
    raw_response: NotRequired[list[Any]]
