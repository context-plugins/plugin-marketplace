from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .old_price import OldPrice, OldPriceDict
from .price1 import Price1, Price1Dict


class ShoppingCard1(SdkBaseModel):
    position: int
    """1-indexed rank across the ``shoppingCards`` array, in display order"""

    title: str
    """Product title"""

    product_link: str = Field(alias="productLink")
    """Google Shopping URL for the product"""

    product_id: str = Field(alias="productId")
    """Google Shopping product ID"""

    price: Optional[Price1] = UNSET
    """Current price. For a range, ``value`` is the lowest price. For an installment offer, only ``raw`` is present"""

    old_price: Optional[OldPrice] = Field(default=UNSET, alias="oldPrice")
    """Price before a discount, same shape as ``price``. Absent when there is no discount"""

    store: Optional[str] = UNSET
    """Store that sells the product at ``price``"""

    store_link: Optional[str] = Field(default=UNSET, alias="storeLink")
    """Direct URL of the product on the store's site"""

    store_count: Optional[int] = Field(default=UNSET, alias="storeCount")
    """Number of stores that sell the product. Gemini shows "& more" after the store name when it is above 1"""

    shipping: Optional[str] = UNSET
    """Shipping cost as Gemini displays it"""

    delivery_time: Optional[str] = Field(default=UNSET, alias="deliveryTime")
    """Delivery time as Gemini displays it"""

    rating: Optional[float] = UNSET
    """Product rating (0-5). Absent for a product with no reviews"""

    reviews: Optional[int] = UNSET
    """Number of reviews"""

    brand: Optional[str] = UNSET
    """Product brand"""

    description: Optional[str] = UNSET
    """Product description"""

    thumbnail: Optional[str] = UNSET
    """Image URL that the card shows"""

    images: Optional[list[str]] = UNSET
    """All product image URLs. The first one is ``thumbnail``"""

    catalog_id: Optional[str] = Field(default=UNSET, alias="catalogId")
    """Google Shopping catalog ID"""

    gpc_id: Optional[str] = Field(default=UNSET, alias="gpcId")
    """Google Shopping product cluster ID"""


class ShoppingCard1Dict(TypedDict):
    position: int
    title: str
    product_link: str
    product_id: str
    price: NotRequired[Price1Dict]
    old_price: NotRequired[OldPriceDict]
    store: NotRequired[str]
    store_link: NotRequired[str]
    store_count: NotRequired[int]
    shipping: NotRequired[str]
    delivery_time: NotRequired[str]
    rating: NotRequired[float]
    reviews: NotRequired[int]
    brand: NotRequired[str]
    description: NotRequired[str]
    thumbnail: NotRequired[str]
    images: NotRequired[list[str]]
    catalog_id: NotRequired[str]
    gpc_id: NotRequired[str]
