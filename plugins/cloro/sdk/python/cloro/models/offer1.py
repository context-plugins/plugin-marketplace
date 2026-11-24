from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .price_details2 import PriceDetails2, PriceDetails2Dict
from .tag_model import TagModel, TagModelDict


class Offer1(SdkBaseModel):
    merchant_name: Optional[str] = UNSET
    """Merchant name"""

    marketplace_seller: OptionalNullable[str] = UNSET
    """Third-party seller on the marketplace"""

    seller_name: Optional[str] = UNSET
    """Seller name"""

    brand: OptionalNullable[str] = UNSET
    """Product brand. Set on only some offers, so often ``null`` or absent."""

    product_name: Optional[str] = UNSET
    """Product name as listed by merchant"""

    url: Optional[str] = UNSET
    """Offer URL with ChatGPT attribution"""

    price: Optional[str] = UNSET
    """Offer price"""

    details: Optional[str] = UNSET
    """Stock and delivery information"""

    available: Optional[bool] = UNSET
    """Offer availability status"""

    checkoutable: Optional[bool] = UNSET
    """Whether offer can be checked out directly"""

    price_details: Optional[PriceDetails2] = UNSET
    """Detailed price breakdown"""

    tag: Optional[TagModel] = UNSET
    """Promotional tag"""


class Offer1Dict(TypedDict):
    merchant_name: NotRequired[str]
    marketplace_seller: NotRequired[str | None]
    seller_name: NotRequired[str]
    brand: NotRequired[str | None]
    product_name: NotRequired[str]
    url: NotRequired[str]
    price: NotRequired[str]
    details: NotRequired[str]
    available: NotRequired[bool]
    checkoutable: NotRequired[bool]
    price_details: NotRequired[PriceDetails2Dict]
    tag: NotRequired[TagModelDict]
