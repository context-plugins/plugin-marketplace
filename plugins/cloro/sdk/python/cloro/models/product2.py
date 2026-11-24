from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .offer import Offer, OfferDict


class Product2(SdkBaseModel):
    title: Optional[str] = UNSET
    """Product name"""

    id: Optional[str] = UNSET
    """Product identifier"""

    url: Optional[str] = UNSET
    """Product page URL"""

    price: Optional[str] = UNSET
    """Current price"""

    merchant: Optional[str] = UNSET
    """Merchant name"""

    available: Optional[bool] = UNSET
    """Whether the product is currently available"""

    image_urls: Optional[list[str]] = Field(default=UNSET, alias="imageUrls")
    """Product image URLs"""

    num_reviews: Optional[float] = Field(default=UNSET, alias="numReviews")
    """Number of reviews (0 when none)"""

    offers: Optional[list[Offer]] = UNSET
    """Shopping offers from individual merchants"""

    position: Optional[int] = UNSET
    """1-indexed rank across all products in all shopping cards in the response (flat, not reset per card)"""

    rating: Optional[float] = UNSET
    """Product rating (0-5 scale)"""

    original_price: OptionalNullable[str] = UNSET
    """Original price before discount; null when not on sale"""

    description: Optional[str] = UNSET
    """Product description"""

    variants: Optional[list[Any]] = UNSET
    """Product variants (size, color, etc.)"""


class Product2Dict(TypedDict):
    title: NotRequired[str]
    id: NotRequired[str]
    url: NotRequired[str]
    price: NotRequired[str]
    merchant: NotRequired[str]
    available: NotRequired[bool]
    image_urls: NotRequired[list[str]]
    num_reviews: NotRequired[float]
    offers: NotRequired[list[OfferDict]]
    position: NotRequired[int]
    rating: NotRequired[float]
    original_price: NotRequired[str | None]
    description: NotRequired[str]
    variants: NotRequired[list[Any]]
