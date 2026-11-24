from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .old_price4 import OldPrice4, OldPrice4Dict
from .price6 import Price6, Price6Dict
from .snippet_link import SnippetLink, SnippetLinkDict


class ShoppingCard4(SdkBaseModel):
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

    old_price: Optional[OldPrice4] = Field(default=UNSET, alias="oldPrice")
    """Original price before discount. Same shape as ``price``."""

    snippet: Optional[str] = UNSET
    """Product description snippet"""

    snippet_links: Optional[list[SnippetLink]] = Field(default=UNSET, alias="snippetLinks")
    """Links found within the product snippet"""

    position: Optional[int] = UNSET
    """1-indexed rank across the ``shoppingCards`` array in DOM/render order."""


class ShoppingCard4Dict(TypedDict):
    title: NotRequired[str]
    price: NotRequired[Price6Dict]
    store: NotRequired[str]
    rating: NotRequired[float]
    reviews: NotRequired[str]
    thumbnail: NotRequired[str]
    product_link: NotRequired[str]
    old_price: NotRequired[OldPrice4Dict]
    snippet: NotRequired[str]
    snippet_links: NotRequired[list[SnippetLinkDict]]
    position: NotRequired[int]
