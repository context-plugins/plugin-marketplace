from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.render_as1 import RenderAs1OrStr
from .shopping_product2 import ShoppingProduct2, ShoppingProduct2Dict


class InlineProduct2(SdkBaseModel):
    """Inline product reference that appeared in the response text, or a product card of a gpt-6 answer, including
    pricing and offers"""

    product: Optional[ShoppingProduct2] = UNSET
    """Individual product information"""

    render_as: Optional[RenderAs1OrStr] = UNSET
    """How the product is rendered in the response. Absent for a gpt-6 product card."""


class InlineProduct2Dict(TypedDict):
    product: NotRequired[ShoppingProduct2Dict]
    render_as: NotRequired[RenderAs1OrStr]
