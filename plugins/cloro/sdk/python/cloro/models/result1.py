from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .citation_pill1 import CitationPill1, CitationPill1Dict
from .place import Place, PlaceDict
from .shopping_card1 import ShoppingCard1, ShoppingCard1Dict
from .source1 import Source1, Source1Dict


class Result1(SdkBaseModel):
    """Gemini response data"""

    text: Optional[str] = UNSET
    """Gemini's response text"""

    markdown: Optional[str] = UNSET
    """Gemini's response in Markdown format"""

    html: Optional[str] = UNSET
    """A URL to the full HTML of the response. Expires 24 hours after generation."""

    sources: Optional[list[Source1]] = UNSET
    """Sources cited by Gemini"""

    citation_pills: Optional[list[CitationPill1]] = Field(default=UNSET, alias="citationPills")
    """Inline citation pills extracted from the Gemini answer. Each entry is one (pill, source) pair: when a chip cites
    N sources (Gemini's ``+N`` analog or section-summary chips), the array contains N entries sharing the same
    ``citationPillId`` but with per-source ``label``, ``url``, and ``domain``. Group by ``citationPillId`` to recover
    the pill-level structure. ``label`` is always present on the wire; it can be an empty string when the rail has no
    title for a source. Omitted from ``result`` when the answer carries no pills."""

    places: Optional[list[Place]] = UNSET
    """Place cards returned for lodging and local answers"""

    shopping_cards: Optional[list[ShoppingCard1]] = Field(default=UNSET, alias="shoppingCards")
    """Product cards Gemini shows on shopping answers, in display order. Field names follow AI Mode's ``shoppingCards``.
    Omitted from ``result`` when the answer carries no product cards."""

    raw_response: Optional[list[Any]] = Field(default=UNSET, alias="rawResponse")
    """Raw upstream provider stream captured during the request. Each item is one chunk from the provider's wire
    protocol (SSE event, batchexecute frame, etc.). Format is provider-specific, undocumented, and may change without
    notice — use it for debugging or to access data not yet surfaced in the structured fields above."""


class Result1Dict(TypedDict):
    text: NotRequired[str]
    markdown: NotRequired[str]
    html: NotRequired[str]
    sources: NotRequired[list[Source1Dict]]
    citation_pills: NotRequired[list[CitationPill1Dict]]
    places: NotRequired[list[PlaceDict]]
    shopping_cards: NotRequired[list[ShoppingCard1Dict]]
    raw_response: NotRequired[list[Any]]
