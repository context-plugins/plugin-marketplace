from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .offer_tag import OfferTag, OfferTagDict
from .price_details import PriceDetails, PriceDetailsDict


class ShoppingOffer(SdkBaseModel):
    """Shopping offer with pricing details from a specific merchant"""

    merchant_name: Optional[str] = UNSET
    """Merchant name"""

    merchant_subtitle: OptionalNullable[str] = UNSET
    """Merchant subtitle or additional info"""

    marketplace_seller: OptionalNullable[str] = UNSET
    """Third-party seller on the marketplace"""

    seller_name: Optional[str] = UNSET
    """Seller name"""

    brand: OptionalNullable[str] = UNSET
    """Product brand. Set on only some offers, so often ``null`` or absent."""

    product_name: Optional[str] = UNSET
    """Product name as listed by merchant"""

    url: Optional[str] = UNSET
    """Offer URL with attribution"""

    price: Optional[str] = UNSET
    """Offer price"""

    details: Optional[str] = UNSET
    """Stock and delivery information"""

    original_price: OptionalNullable[str] = UNSET
    """Original price before discount"""

    available: Optional[bool] = UNSET
    """Whether the product is available"""

    checkoutable: Optional[bool] = UNSET
    """Whether the product can be checked out directly"""

    is_digital: OptionalNullable[bool] = UNSET
    """Whether this is a digital product"""

    checkout_payload: OptionalNullable[str] = UNSET
    """Checkout payload data"""

    checkout_image_urls: OptionalNullable[list[str]] = UNSET
    """Image URLs for checkout display"""

    shop_id: OptionalNullable[str] = UNSET
    """Shop identifier"""

    provider: Optional[str] = UNSET
    """Data provider identifier"""

    price_details: Optional[PriceDetails] = UNSET
    """Detailed price breakdown for an offer"""

    tag: OptionalNullable[OfferTag] = UNSET
    """Promotional tag on an offer"""


class ShoppingOfferDict(TypedDict):
    merchant_name: NotRequired[str]
    merchant_subtitle: NotRequired[str | None]
    marketplace_seller: NotRequired[str | None]
    seller_name: NotRequired[str]
    brand: NotRequired[str | None]
    product_name: NotRequired[str]
    url: NotRequired[str]
    price: NotRequired[str]
    details: NotRequired[str]
    original_price: NotRequired[str | None]
    available: NotRequired[bool]
    checkoutable: NotRequired[bool]
    is_digital: NotRequired[bool | None]
    checkout_payload: NotRequired[str | None]
    checkout_image_urls: NotRequired[list[str] | None]
    shop_id: NotRequired[str | None]
    provider: NotRequired[str]
    price_details: NotRequired[PriceDetailsDict]
    tag: NotRequired[OfferTagDict | None]
