from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .product3 import Product3, Product3Dict


class ShoppingCard5(SdkBaseModel):
    tags: Optional[list[str]] = UNSET
    """Category tags for the shopping card"""

    products: Optional[list[Product3]] = UNSET
    """Array of product information"""


class ShoppingCard5Dict(TypedDict):
    tags: NotRequired[list[str]]
    products: NotRequired[list[Product3Dict]]
