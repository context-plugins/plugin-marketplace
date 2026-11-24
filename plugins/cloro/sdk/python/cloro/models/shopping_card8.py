from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .old_price4 import OldPrice4, OldPrice4Dict
from .price6 import Price6, Price6Dict
from .snippet_link1 import SnippetLink1, SnippetLink1Dict


class ShoppingCard8(SdkBaseModel):
    title: Optional[str] = UNSET
    """Product title"""

    price: Optional[Price6] = UNSET
    """Price as displayed. ``raw`` is always present; ``value`` and ``currency`` are omitted when they can't be parsed,
    never sent as ``null``."""

    store: Optional[str] = UNSET
    """Merchant/store name"""

    rating: Optional[float] = UNSET
    """Product rating"""

    reviews: Optional[str] = UNSET
    """Review count"""

    thumbnail: Optional[str] = UNSET
    """Product image"""

    product_link: Optional[str] = Field(default=UNSET, alias="productLink")
    """Direct product URL"""

    product_result_token: Optional[str] = Field(default=UNSET, alias="productResultToken")
    """Token for /api-reference/endpoint/google/product, which returns the product panel that this product opens.
    Expires five minutes after the scrape. Present only when the product links to a Google product panel."""

    product_docid: Optional[str] = Field(default=UNSET, alias="productDocid")
    """Google's ID for the product, read from ``productLink``. The same product has the same value in ``shoppingCards``,
    ``inlineProducts`` and ``productResults`` of one response. Google can change the value between responses, so do not
    use it to identify a product over time. Absent when the link from Google has no ID."""

    old_price: Optional[OldPrice4] = Field(default=UNSET, alias="oldPrice")
    """Original price before discount. Same shape as ``price``."""

    snippet: Optional[str] = UNSET
    """Product description snippet"""

    snippet_links: Optional[list[SnippetLink1]] = Field(default=UNSET, alias="snippetLinks")
    """Links found within the product snippet"""

    position: Optional[int] = UNSET
    """1-indexed rank across the ``shoppingCards`` array in DOM/render order."""


class ShoppingCard8Dict(TypedDict):
    title: NotRequired[str]
    price: NotRequired[Price6Dict]
    store: NotRequired[str]
    rating: NotRequired[float]
    reviews: NotRequired[str]
    thumbnail: NotRequired[str]
    product_link: NotRequired[str]
    product_result_token: NotRequired[str]
    product_docid: NotRequired[str]
    old_price: NotRequired[OldPrice4Dict]
    snippet: NotRequired[str]
    snippet_links: NotRequired[list[SnippetLink1Dict]]
    position: NotRequired[int]
