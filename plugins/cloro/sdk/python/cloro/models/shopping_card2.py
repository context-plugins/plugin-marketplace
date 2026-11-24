from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .product2 import Product2, Product2Dict


class ShoppingCard2(SdkBaseModel):
    tags: Optional[list[str]] = UNSET
    """Optional category tags for the shopping card"""

    products: Optional[list[Product2]] = UNSET
    """Array of product objects"""


class ShoppingCard2Dict(TypedDict):
    tags: NotRequired[list[str]]
    products: NotRequired[list[Product2Dict]]
