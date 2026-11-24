from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .old_price5 import OldPrice5, OldPrice5Dict
from .price8 import Price8, Price8Dict


class InlineProduct1(SdkBaseModel):
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

    thumbnail: Optional[str] = UNSET
    """Product image URL"""

    product_link: Optional[str] = Field(default=UNSET, alias="productLink")
    """Direct product URL"""


class InlineProduct1Dict(TypedDict):
    title: NotRequired[str]
    position: NotRequired[int]
    price: NotRequired[Price8Dict]
    old_price: NotRequired[OldPrice5Dict]
    store: NotRequired[str]
    thumbnail: NotRequired[str]
    product_link: NotRequired[str]
