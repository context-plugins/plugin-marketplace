from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .offer1 import Offer1, Offer1Dict
from .rating_grouped_citation1 import RatingGroupedCitation1, RatingGroupedCitation1Dict


class Product3(SdkBaseModel):
    title: Optional[str] = UNSET
    """Product name"""

    position: Optional[int] = UNSET
    """1-indexed rank across all products in all shopping cards in the response (flat, not reset per card)."""

    url: Optional[str] = UNSET
    """Product page URL with ChatGPT attribution"""

    price: Optional[str] = UNSET
    """Current price"""

    featured_tag: Optional[str] = UNSET
    """Product category or style tag"""

    merchant: Optional[str] = UNSET
    """Merchant information"""

    image_urls: Optional[list[str]] = UNSET
    """Array of product image URLs"""

    rating: Optional[float] = UNSET
    """Product rating (0-5 scale)"""

    num_reviews: Optional[int] = UNSET
    """Number of reviews"""

    id: Optional[str] = UNSET
    """Unique product identifier"""

    offers: Optional[list[Offer1]] = UNSET
    """Array of shopping offers from different merchants"""

    rating_grouped_citation: Optional[RatingGroupedCitation1] = UNSET
    """Rating source information"""


class Product3Dict(TypedDict):
    title: NotRequired[str]
    position: NotRequired[int]
    url: NotRequired[str]
    price: NotRequired[str]
    featured_tag: NotRequired[str]
    merchant: NotRequired[str]
    image_urls: NotRequired[list[str]]
    rating: NotRequired[float]
    num_reviews: NotRequired[int]
    id: NotRequired[str]
    offers: NotRequired[list[Offer1Dict]]
    rating_grouped_citation: NotRequired[RatingGroupedCitation1Dict]
