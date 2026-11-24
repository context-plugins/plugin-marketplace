from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ads6 import Ads6, Ads6Dict
from .citation_pill8 import CitationPill8, CitationPill8Dict
from .google_inline_product import GoogleInlineProduct, GoogleInlineProductDict
from .google_map_place import GoogleMapPlace, GoogleMapPlaceDict
from .google_place import GooglePlace, GooglePlaceDict
from .shopping_card8 import ShoppingCard8, ShoppingCard8Dict
from .source13 import Source13, Source13Dict
from .video3 import Video3, Video3Dict


class Result15(SdkBaseModel):
    """AI Mode response data"""

    text: Optional[str] = UNSET
    """AI Mode's response text"""

    html: Optional[str] = UNSET
    """A URL to the full HTML of the response."""

    sources: Optional[list[Source13]] = UNSET
    """Array of sources referenced in the response"""

    citation_pills: Optional[list[CitationPill8]] = Field(default=UNSET, alias="citationPills")
    """Inline citation pills extracted from the AI Mode answer. Each entry is one (pill, source) pair: when a pill cites
    N sources (Google's ``[Label +N]`` chips), the array contains N entries sharing the same ``citationPillId`` but
    carrying per-source ``label``, ``url``, and ``domain``. Group by ``citationPillId`` to recover the pill-level
    structure. Omitted from ``result`` when the answer carries no pills."""

    markdown: Optional[str] = UNSET
    """AI Mode's response formatted in Markdown (included when include.markdown is true). Converted from Google's live
    page, so element order can shift as Google updates its markup."""

    places: Optional[list[GooglePlace]] = UNSET
    """Inline place cards extracted from the response"""

    shopping_cards: Optional[list[ShoppingCard8]] = Field(default=UNSET, alias="shoppingCards")
    """Shopping product information extracted from the response"""

    ads: Optional[Ads6] = UNSET
    """Sponsored ad section extracted from the response"""

    inline_products: Optional[list[GoogleInlineProduct]] = Field(default=UNSET, alias="inlineProducts")
    """Inline product cards found within the AI response text"""

    videos: Optional[list[Video3]] = UNSET
    """Inline video cards embedded in the AI response (currently YouTube)"""

    map: Optional[list[GoogleMapPlace]] = UNSET
    """GPS-enriched location data extracted from the response"""


class Result15Dict(TypedDict):
    text: NotRequired[str]
    html: NotRequired[str]
    sources: NotRequired[list[Source13Dict]]
    citation_pills: NotRequired[list[CitationPill8Dict]]
    markdown: NotRequired[str]
    places: NotRequired[list[GooglePlaceDict]]
    shopping_cards: NotRequired[list[ShoppingCard8Dict]]
    ads: NotRequired[Ads6Dict]
    inline_products: NotRequired[list[GoogleInlineProductDict]]
    videos: NotRequired[list[Video3Dict]]
    map: NotRequired[list[GoogleMapPlaceDict]]
