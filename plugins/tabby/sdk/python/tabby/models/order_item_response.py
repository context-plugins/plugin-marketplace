from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel
from .enums.gender1 import Gender1OrStr


class OrderItemResponse(SdkBaseModel):
    reference_id: OptionalNullable[str] = UNSET
    """Merchant’s product identifier. Displayed in Customer's App and Merchant Dashboard, used for Item refunds and
    disputes."""

    title: str | None
    """Name of the product."""

    description: OptionalNullable[str] = UNSET
    """Description of the product."""

    quantity: int = 0
    """Quantity of the product ordered."""

    unit_price: str = "0"
    """Price per unit of the product. Should be positive or zero."""

    image_url: OptionalNullable[str] = UNSET
    """URL of the item image to show in the order information."""

    product_url: OptionalNullable[str] = UNSET
    """URL of the item at your store."""

    gender: OptionalNullable[Gender1OrStr] = UNSET
    """Who the goods are designed to."""

    category: str | None
    """Required as name of high-level category (Clothes, Electronics,etc.); or a tree of
    category-subcategory1-subcategory2; or id of the category and table with category-ids data mapped provided."""

    color: OptionalNullable[str] = UNSET
    """white / blue/ green"""

    product_material: OptionalNullable[str] = UNSET
    """cotton / polyester / synthetic"""

    size_type: OptionalNullable[str] = UNSET
    """EU / UK"""

    size: OptionalNullable[str] = UNSET
    """L / XL / 12"""

    brand: OptionalNullable[str] = UNSET
    """Mango / Dorothy Perkins / Tommy Hilfiger"""

    is_refundable: OptionalNullable[bool] = UNSET
    """Indicates whether a product can be returned"""


class OrderItemResponseDict(TypedDict):
    reference_id: NotRequired[str | None]
    title: str | None
    description: NotRequired[str | None]
    quantity: int
    unit_price: str
    image_url: NotRequired[str | None]
    product_url: NotRequired[str | None]
    gender: NotRequired[Gender1OrStr | None]
    category: str | None
    color: NotRequired[str | None]
    product_material: NotRequired[str | None]
    size_type: NotRequired[str | None]
    size: NotRequired[str | None]
    brand: NotRequired[str | None]
    is_refundable: NotRequired[bool | None]
