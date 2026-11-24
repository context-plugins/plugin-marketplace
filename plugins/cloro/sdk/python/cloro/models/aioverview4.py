from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ads4 import Ads4, Ads4Dict
from .citation_pill6 import CitationPill6, CitationPill6Dict
from .google_inline_product import GoogleInlineProduct, GoogleInlineProductDict
from .google_map_place import GoogleMapPlace, GoogleMapPlaceDict
from .google_place import GooglePlace, GooglePlaceDict
from .related_link1 import RelatedLink1, RelatedLink1Dict
from .source10 import Source10, Source10Dict
from .video2 import Video2, Video2Dict


class Aioverview4(SdkBaseModel):
    """Google AI Overview data (if requested). Omitted when Google shows no AI Overview for the query."""

    sources: Optional[list[Source10]] = UNSET
    """Sources referenced in the AI Overview"""

    citation_pills: Optional[list[CitationPill6]] = Field(default=UNSET, alias="citationPills")
    """Inline citation pills extracted from the AI Overview answer. Each entry is one (pill, source) pair: when a pill
    cites N sources (Google's ``[Label +N]`` chips), the array contains N entries sharing the same ``citationPillId``
    but carrying per-source ``label``, ``url``, and ``domain``. Group by ``citationPillId`` to recover the pill-level
    structure. Omitted from ``result.aioverview`` when the answer carries no pills."""

    related_links: Optional[list[RelatedLink1]] = Field(default=UNSET, alias="relatedLinks")
    """A citation chip's "View related links" flyout items — URLs Google groups under the chip that are NOT in the
    ``sources`` rail (for example a Google Shopping comparison link). Each entry shares the ``citationPillId`` of its
    chip so it can be grouped with that chip's ``citationPills``, but carries no ``position`` (a related link is absent
    from ``sources``). Related links also render inline in ``markdown``, so ``markdown`` may contain more URLs than
    ``sources`` / ``citationPills`` — the extras are accounted for here. Omitted from ``result.aioverview`` when no chip
    carries related links."""

    text: Optional[str] = UNSET
    """AI Overview text content"""

    markdown: Optional[str] = UNSET
    """AI Overview content formatted as markdown (if requested)"""

    videos: Optional[list[Video2]] = UNSET
    """Video content included in the AI Overview"""

    places: Optional[list[GooglePlace]] = UNSET
    """Place cards in the AI Overview answer. Omitted when the answer has none."""

    map: Optional[list[GoogleMapPlace]] = UNSET
    """The place cards that Google geo-tagged, with coordinates. Omitted when the answer has none."""

    inline_products: Optional[list[GoogleInlineProduct]] = Field(default=UNSET, alias="inlineProducts")
    """Product cards in the AI Overview answer. Omitted when the answer has none."""

    ads: Optional[list[Ads4]] = UNSET
    """Sponsored ads injected by Google inside the AI Overview"""


class Aioverview4Dict(TypedDict):
    sources: NotRequired[list[Source10Dict]]
    citation_pills: NotRequired[list[CitationPill6Dict]]
    related_links: NotRequired[list[RelatedLink1Dict]]
    text: NotRequired[str]
    markdown: NotRequired[str]
    videos: NotRequired[list[Video2Dict]]
    places: NotRequired[list[GooglePlaceDict]]
    map: NotRequired[list[GoogleMapPlaceDict]]
    inline_products: NotRequired[list[GoogleInlineProductDict]]
    ads: NotRequired[list[Ads4Dict]]
