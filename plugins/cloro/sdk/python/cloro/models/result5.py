from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .ads import Ads, AdsDict
from .citation_pill4 import CitationPill4, CitationPill4Dict
from .google_map_place import GoogleMapPlace, GoogleMapPlaceDict
from .google_place import GooglePlace, GooglePlaceDict
from .inline_product1 import InlineProduct1, InlineProduct1Dict
from .product_result import ProductResult, ProductResultDict
from .shopping_card4 import ShoppingCard4, ShoppingCard4Dict
from .source7 import Source7, Source7Dict
from .video1 import Video1, Video1Dict


class Result5(SdkBaseModel):
    """AI Mode response data"""

    text: Optional[str] = UNSET
    """AI Mode's response text"""

    html: Optional[str] = UNSET
    """A URL to the full HTML of the response."""

    sources: Optional[list[Source7]] = UNSET
    """Array of sources referenced in the response"""

    citation_pills: Optional[list[CitationPill4]] = Field(default=UNSET, alias="citationPills")
    """Inline citation pills extracted from the AI Mode answer. Each entry is one (pill, source) pair: when a pill cites
    N sources (Google's ``[Label +N]`` chips), the array contains N entries sharing the same ``citationPillId`` but
    carrying per-source ``label``, ``url``, and ``domain``. Group by ``citationPillId`` to recover the pill-level
    structure. Omitted from ``result`` when the answer carries no pills."""

    markdown: Optional[str] = UNSET
    """AI Mode's response formatted in Markdown (included when include.markdown is true). Converted from Google's live
    page, so element order can shift as Google updates its markup."""

    places: Optional[list[GooglePlace]] = UNSET
    """Inline place cards extracted from the response"""

    shopping_cards: Optional[list[ShoppingCard4]] = Field(default=UNSET, alias="shoppingCards")
    """Shopping product information extracted from the response"""

    ads: Optional[Ads] = UNSET
    """Sponsored ad section extracted from the response"""

    inline_products: Optional[list[InlineProduct1]] = Field(default=UNSET, alias="inlineProducts")
    """Inline product cards found within the AI response text"""

    videos: Optional[list[Video1]] = UNSET
    """Inline video cards embedded in the AI response (currently YouTube)"""

    map: Optional[list[GoogleMapPlace]] = UNSET
    """GPS-enriched location data extracted from the response"""

    product_results: Optional[list[ProductResult]] = Field(default=UNSET, alias="productResults")
    """Merchant offers per product cluster, up to 6. Returned only when ``include.expandProducts`` is true. See `product
    results </api-reference/endpoint/aimode/product-results>`__."""


class Result5Dict(TypedDict):
    text: NotRequired[str]
    html: NotRequired[str]
    sources: NotRequired[list[Source7Dict]]
    citation_pills: NotRequired[list[CitationPill4Dict]]
    markdown: NotRequired[str]
    places: NotRequired[list[GooglePlaceDict]]
    shopping_cards: NotRequired[list[ShoppingCard4Dict]]
    ads: NotRequired[AdsDict]
    inline_products: NotRequired[list[InlineProduct1Dict]]
    videos: NotRequired[list[Video1Dict]]
    map: NotRequired[list[GoogleMapPlaceDict]]
    product_results: NotRequired[list[ProductResultDict]]
