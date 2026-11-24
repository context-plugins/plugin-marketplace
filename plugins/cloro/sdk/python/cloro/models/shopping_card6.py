from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .old_price3 import OldPrice3, OldPrice3Dict
from .price5 import Price5, Price5Dict


class ShoppingCard6(SdkBaseModel):
    title: str
    """Product title"""

    position: int
    """1-indexed rank across the whole ``shoppingCards`` array in DOM order (flat, does not reset per ``category``
    section)."""

    product_result_token: Optional[str] = Field(default=UNSET, alias="productResultToken")
    """Token for ``POST /v1/monitor/google/product``, which returns the product panel that this card opens. Expires five
    minutes after the scrape. Present only on ``device: "desktop"`` requests, on first-page cards that Google serves
    with a panel reference."""

    promo_label: Optional[str] = Field(default=UNSET, alias="promoLabel")
    """Discount badge as displayed by Google, in the SERP language (for example "LOW PRICE", "OFERTA", "PROMOÇÃO", "20%
    OFF"). Google renders it above the product name on a discounted card. Present only on a card that carries the badge,
    and Google-only — AI Mode does not render it."""

    category: Optional[str] = UNSET
    """Parent section header text. Lets callers distinguish cards from coexisting shopping panels on the same SERP.
    Current Google-emitted values include "Popular products" and "More products"."""

    price: Optional[Price5] = UNSET
    """Structured pricing information. ``currency`` and ``raw`` are always present; ``value`` is omitted when the number
    doesn't parse, and the whole object is omitted when no currency appears beside a number. ``raw`` carries the visible
    text verbatim."""

    old_price: Optional[OldPrice3] = Field(default=UNSET, alias="oldPrice")
    """Original price before discount. Same shape as ``price``."""

    store: Optional[str] = UNSET
    """Merchant/store name"""

    rating: Optional[float] = UNSET
    """Product rating"""

    reviews: Optional[str] = UNSET
    """Review count"""

    thumbnail: Optional[str] = UNSET
    """Product image URL"""


class ShoppingCard6Dict(TypedDict):
    title: str
    position: int
    product_result_token: NotRequired[str]
    promo_label: NotRequired[str]
    category: NotRequired[str]
    price: NotRequired[Price5Dict]
    old_price: NotRequired[OldPrice3Dict]
    store: NotRequired[str]
    rating: NotRequired[float]
    reviews: NotRequired[str]
    thumbnail: NotRequired[str]
