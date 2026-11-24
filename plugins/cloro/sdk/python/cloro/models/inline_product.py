from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.render_as import RenderAsOrStr
from .shopping_product import ShoppingProduct, ShoppingProductDict


class InlineProduct(SdkBaseModel):
    """Inline product reference that appeared in the response text, including pricing and offers"""

    product: Optional[ShoppingProduct] = UNSET
    """Individual product information"""

    render_as: Optional[RenderAsOrStr] = UNSET
    """How the product is rendered in the response"""


class InlineProductDict(TypedDict):
    product: NotRequired[ShoppingProductDict]
    render_as: NotRequired[RenderAsOrStr]
