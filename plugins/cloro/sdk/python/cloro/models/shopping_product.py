from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .analytics_meta import AnalyticsMeta, AnalyticsMetaDict
from .product_lookup_data import ProductLookupData, ProductLookupDataDict
from .product_lookup_key import ProductLookupKey, ProductLookupKeyDict
from .rating_grouped_citation import RatingGroupedCitation, RatingGroupedCitationDict
from .shopping_offer import ShoppingOffer, ShoppingOfferDict
from .showcase_metadata import ShowcaseMetadata, ShowcaseMetadataDict


class ShoppingProduct(SdkBaseModel):
    """Individual product information"""

    title: Optional[str] = UNSET
    """Product name"""

    position: Optional[int] = UNSET
    """1-indexed rank across all products in all shopping cards in the response (flat, not reset per card)."""

    url: Optional[str] = UNSET
    """Product page URL"""

    description: Optional[str] = UNSET
    """Product description"""

    price: Optional[str] = UNSET
    """Current price"""

    featured_tag: Optional[str] = UNSET
    """Product category or style tag"""

    rating: Optional[float] = UNSET
    """Product rating (0-5)"""

    num_reviews: Optional[int] = UNSET
    """Number of reviews"""

    image_urls: Optional[list[str]] = UNSET
    """Product image URLs"""

    id: Optional[str] = UNSET
    """Product identifier"""

    variants: Optional[Any] = UNSET
    """Product variants (size, color, etc.)"""

    offers: Optional[list[ShoppingOffer]] = UNSET
    """Shopping offers with pricing details from different merchants"""

    rating_grouped_citation: Optional[RatingGroupedCitation] = UNSET
    """Rating source information with supporting websites"""

    provider: Optional[str] = UNSET
    """Data provider identifier"""

    providers: Optional[list[str]] = UNSET
    """List of data providers"""

    product_lookup_key: Optional[ProductLookupKey] = UNSET
    """Key used to look up product updates"""

    product_lookup_data: Optional[ProductLookupData] = UNSET
    """Structured product lookup query data"""

    showcase_metadata: Optional[ShowcaseMetadata] = UNSET
    """Visual showcase metadata attached to a shopping product (image, background, and per-slot placement)."""

    show_price_disclosure: Optional[bool] = UNSET
    """Whether to show price disclosure"""

    analytics_meta: Optional[AnalyticsMeta] = UNSET
    """Analytics metadata"""

    metadata_sources: Optional[list[str]] = UNSET
    """Sources of product metadata"""

    product_event_uuid: Optional[str] = UNSET
    """UUID for product event tracking"""

    generated_product_query: Optional[str] = Field(default=UNSET, alias="generatedProductQuery")
    """Broad shopping query ChatGPT generated for this product (extracted from product_lookup_key.data). Useful for
    understanding the search intent behind the recommendation."""


class ShoppingProductDict(TypedDict):
    title: NotRequired[str]
    position: NotRequired[int]
    url: NotRequired[str]
    description: NotRequired[str]
    price: NotRequired[str]
    featured_tag: NotRequired[str]
    rating: NotRequired[float]
    num_reviews: NotRequired[int]
    image_urls: NotRequired[list[str]]
    id: NotRequired[str]
    variants: NotRequired[Any]
    offers: NotRequired[list[ShoppingOfferDict]]
    rating_grouped_citation: NotRequired[RatingGroupedCitationDict]
    provider: NotRequired[str]
    providers: NotRequired[list[str]]
    product_lookup_key: NotRequired[ProductLookupKeyDict]
    product_lookup_data: NotRequired[ProductLookupDataDict]
    showcase_metadata: NotRequired[ShowcaseMetadataDict]
    show_price_disclosure: NotRequired[bool]
    analytics_meta: NotRequired[AnalyticsMetaDict]
    metadata_sources: NotRequired[list[str]]
    product_event_uuid: NotRequired[str]
    generated_product_query: NotRequired[str]
