from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ad1 import Ad1, Ad1Dict
from .citation_pill3 import CitationPill3, CitationPill3Dict
from .google_map_place import GoogleMapPlace, GoogleMapPlaceDict
from .google_place import GooglePlace, GooglePlaceDict
from .related_link import RelatedLink, RelatedLinkDict
from .source4 import Source4, Source4Dict
from .video import Video, VideoDict


class Aioverview(SdkBaseModel):
    """Google AI Overview data (if requested). Omitted when Google shows no AI Overview for the query."""

    sources: Optional[list[Source4]] = UNSET
    """Sources referenced in the AI Overview"""

    citation_pills: Optional[list[CitationPill3]] = Field(default=UNSET, alias="citationPills")
    """Inline citation pills extracted from the AI Overview answer. Each entry is one (pill, source) pair: when a pill
    cites N sources (Google's ``[Label +N]`` chips), the array contains N entries sharing the same ``citationPillId``
    but carrying per-source ``label``, ``url``, and ``domain``. Group by ``citationPillId`` to recover the pill-level
    structure. Omitted from ``result.aioverview`` when the answer carries no pills."""

    related_links: Optional[list[RelatedLink]] = Field(default=UNSET, alias="relatedLinks")
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

    videos: Optional[list[Video]] = UNSET
    """Video content included in the AI Overview"""

    places: Optional[list[GooglePlace]] = UNSET
    """Place cards in the AI Overview answer. Omitted when the answer has none."""

    map: Optional[list[GoogleMapPlace]] = UNSET
    """The place cards that Google geo-tagged, with coordinates. Omitted when the answer has none."""

    ads: Optional[list[Ad1]] = UNSET
    """Sponsored ads injected by Google inside the AI Overview"""


class AioverviewDict(TypedDict):
    sources: NotRequired[list[Source4Dict]]
    citation_pills: NotRequired[list[CitationPill3Dict]]
    related_links: NotRequired[list[RelatedLinkDict]]
    text: NotRequired[str]
    markdown: NotRequired[str]
    videos: NotRequired[list[VideoDict]]
    places: NotRequired[list[GooglePlaceDict]]
    map: NotRequired[list[GoogleMapPlaceDict]]
    ads: NotRequired[list[Ad1Dict]]
