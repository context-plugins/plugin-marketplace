from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .price_details5 import PriceDetails5, PriceDetails5Dict


class Offer(SdkBaseModel):
    url: Optional[str] = UNSET
    """Offer URL with Perplexity referral parameters"""

    price: Optional[str] = UNSET
    """Offer price"""

    merchant_name: Optional[str] = UNSET
    """Merchant name"""

    product_name: Optional[str] = UNSET
    """Product name as listed by the merchant"""

    available: Optional[bool] = UNSET
    """Whether the offer is in stock"""

    price_details: Optional[PriceDetails5] = UNSET
    """Detailed price breakdown"""

    original_price: OptionalNullable[str] = UNSET
    """Original price before discount; null when not on sale"""


class OfferDict(TypedDict):
    url: NotRequired[str]
    price: NotRequired[str]
    merchant_name: NotRequired[str]
    product_name: NotRequired[str]
    available: NotRequired[bool]
    price_details: NotRequired[PriceDetails5Dict]
    original_price: NotRequired[str | None]
