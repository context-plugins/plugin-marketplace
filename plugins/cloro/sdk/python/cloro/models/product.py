from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .discount_price import DiscountPrice, DiscountPriceDict
from .image import Image, ImageDict
from .price import Price, PriceDict
from .product1 import Product1, Product1Dict
from .rating import Rating, RatingDict
from .specification import Specification, SpecificationDict


class Product(SdkBaseModel):
    product: Optional[Product1] = UNSET
    """Product identifier information"""

    position: Optional[int] = UNSET
    """1-indexed rank across all products in all shopping cards in the response (flat, not reset per card)."""

    offer_id: Optional[str] = Field(default=UNSET, alias="offerId")
    """Unique offer identifier"""

    url: Optional[str] = UNSET
    """Product page URL"""

    name: Optional[str] = UNSET
    """Product name"""

    description: Optional[str] = UNSET
    """Product description"""

    images: Optional[list[Image]] = UNSET
    """Product images with titles and URLs"""

    specifications: Optional[list[Specification]] = UNSET
    """Product specifications (e.g., Color, Size)"""

    tags: Optional[list[str]] = UNSET
    """Product tags"""

    price: Optional[Price] = UNSET
    """Product pricing information"""

    discount_price: OptionalNullable[DiscountPrice] = Field(default=UNSET, alias="discountPrice")
    """Discount price, same shape as ``price``. May be null or absent."""

    seller: Optional[str] = UNSET
    """Seller name"""

    seller_logo_url: Optional[str] = Field(default=UNSET, alias="sellerLogoUrl")
    """Seller logo URL"""

    brand_name: Optional[str] = Field(default=UNSET, alias="brandName")
    """Product brand name"""

    rating: Optional[Rating] = UNSET
    """Product rating information"""

    can_track_price: Optional[bool] = Field(default=UNSET, alias="canTrackPrice")
    """Whether price tracking is available"""


class ProductDict(TypedDict):
    product: NotRequired[Product1Dict]
    position: NotRequired[int]
    offer_id: NotRequired[str]
    url: NotRequired[str]
    name: NotRequired[str]
    description: NotRequired[str]
    images: NotRequired[list[ImageDict]]
    specifications: NotRequired[list[SpecificationDict]]
    tags: NotRequired[list[str]]
    price: NotRequired[PriceDict]
    discount_price: NotRequired[DiscountPriceDict | None]
    seller: NotRequired[str]
    seller_logo_url: NotRequired[str]
    brand_name: NotRequired[str]
    rating: NotRequired[RatingDict]
    can_track_price: NotRequired[bool]
