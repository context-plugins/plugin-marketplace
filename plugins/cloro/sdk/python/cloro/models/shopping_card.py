from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .product import Product, ProductDict


class ShoppingCard(SdkBaseModel):
    type_: Optional[str] = Field(default=UNSET, alias="type")
    """Shopping card type"""

    layout: Optional[str] = UNSET
    """Layout style for the shopping card"""

    products: Optional[list[Product]] = UNSET
    """Array of product information"""


class ShoppingCardDict(TypedDict):
    type_: NotRequired[str]
    layout: NotRequired[str]
    products: NotRequired[list[ProductDict]]
