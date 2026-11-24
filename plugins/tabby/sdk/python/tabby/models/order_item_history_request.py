from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.gender1 import Gender1OrStr


class OrderItemHistoryRequest(SdkBaseModel):
    reference_id: Optional[str] = UNSET
    """Merchant’s product identifier. Displayed in Customer's App and Merchant Dashboard, used for Item refunds and
    disputes."""

    title: Optional[str] = UNSET
    """Name of the product."""

    description: Optional[str] = UNSET
    """Description of the product."""

    quantity: int = 1
    """Quantity of the product ordered."""

    unit_price: str = "0.00"
    """Price per unit of the product. Should be positive or zero."""

    discount_amount: str = "0.00"
    """Amount of the applied discount if any. Should be positive or zero."""

    image_url: Optional[str] = UNSET
    """URL of the item image to show in the order information."""

    product_url: Optional[str] = UNSET
    """URL of the item at your store."""

    gender: Optional[Gender1OrStr] = UNSET
    """Who the goods are designed to."""

    category: Optional[str] = UNSET
    """Required as name of high-level category (Clothes, Electronics,etc.); or a tree of
    category-subcategory1-subcategory2; or id of the category and table with category-ids data mapped provided."""

    color: Optional[str] = UNSET
    """white / blue/ green"""

    product_material: Optional[str] = UNSET
    """cotton / polyester / synthetic"""

    size_type: Optional[str] = UNSET
    """EU / UK"""

    size: Optional[str] = UNSET
    """L / XL / 12"""

    brand: Optional[str] = UNSET
    """Mango / Dorothy Perkins / Tommy Hilfiger"""

    is_refundable: Optional[bool] = UNSET
    """Indicates whether a product can be returned"""

    barcode: Optional[str] = UNSET
    """A machine-readable product identifier. Typically used for logistics and scanning."""

    ppn: Optional[str] = UNSET
    """Product Part Number assigned by the manufacturer. Used to identify specific components or versions of a
    product."""

    seller: Optional[str] = UNSET
    """The name of the seller offering this item. This field is used to distinguish products from different vendors on a
    single marketplace."""


class OrderItemHistoryRequestDict(TypedDict):
    reference_id: NotRequired[str]
    title: NotRequired[str]
    description: NotRequired[str]
    quantity: NotRequired[int]
    unit_price: NotRequired[str]
    discount_amount: NotRequired[str]
    image_url: NotRequired[str]
    product_url: NotRequired[str]
    gender: NotRequired[Gender1OrStr]
    category: NotRequired[str]
    color: NotRequired[str]
    product_material: NotRequired[str]
    size_type: NotRequired[str]
    size: NotRequired[str]
    brand: NotRequired[str]
    is_refundable: NotRequired[bool]
    barcode: NotRequired[str]
    ppn: NotRequired[str]
    seller: NotRequired[str]
