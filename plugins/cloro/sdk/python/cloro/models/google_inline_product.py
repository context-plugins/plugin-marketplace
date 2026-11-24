from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .old_price5 import OldPrice5, OldPrice5Dict
from .price8 import Price8, Price8Dict


class GoogleInlineProduct(SdkBaseModel):
    title: Optional[str] = UNSET
    """Product title"""

    position: Optional[int] = UNSET
    """1-indexed rank across the ``inlineProducts`` array in DOM/render order."""

    price: Optional[Price8] = UNSET
    """Price as displayed. Fields that can't be parsed are omitted, never sent as ``null``. When Google supplies
    structured price data, ``currency`` is an ISO code (``USD``) and ``raw`` appears only if the page also showed the
    price text."""

    old_price: Optional[OldPrice5] = Field(default=UNSET, alias="oldPrice")
    """Original price before discount. Same shape as ``price``."""

    store: Optional[str] = UNSET
    """Merchant/store name"""

    rating: Optional[float] = UNSET
    """Average rating out of 5, from Google's product data. Absent when Google shows no rating."""

    thumbnail: Optional[str] = UNSET
    """Product image URL"""

    product_link: Optional[str] = Field(default=UNSET, alias="productLink")
    """Direct product URL"""

    product_result_token: Optional[str] = Field(default=UNSET, alias="productResultToken")
    """Token for /api-reference/endpoint/google/product, which returns the product panel that this product opens.
    Expires five minutes after the scrape. Present only when the product links to a Google product panel."""

    product_docid: Optional[str] = Field(default=UNSET, alias="productDocid")
    """Google's ID for the product, read from ``productLink``. The same product has the same value in ``shoppingCards``,
    ``inlineProducts`` and ``productResults`` of one response. Google can change the value between responses, so do not
    use it to identify a product over time. Absent when the link from Google has no ID."""


class GoogleInlineProductDict(TypedDict):
    title: NotRequired[str]
    position: NotRequired[int]
    price: NotRequired[Price8Dict]
    old_price: NotRequired[OldPrice5Dict]
    store: NotRequired[str]
    rating: NotRequired[float]
    thumbnail: NotRequired[str]
    product_link: NotRequired[str]
    product_result_token: NotRequired[str]
    product_docid: NotRequired[str]
