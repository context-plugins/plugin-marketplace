from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .about_the_product import AboutTheProduct, AboutTheProductDict
from .image1 import Image1, Image1Dict
from .store import Store, StoreDict


class ProductResult(SdkBaseModel):
    """One product cluster and its merchant offers. Only ``title`` is guaranteed; anything Google's panel lacks is
    omitted, never sent as ``null``."""

    title: str
    """Product cluster title, as Google displayed it. Empty when the page has no product heading."""

    stores: Optional[list[Store]] = UNSET
    """Merchant offers. Always present on Google Search entries; omitted on AI Mode when Google lists none."""

    about_the_product: Optional[AboutTheProduct] = Field(default=UNSET, alias="aboutTheProduct")
    """Google's description of the product"""

    specifications: Optional[dict[str, str]] = UNSET
    """Spec tables: each category name maps to key/value pairs. Category names and keys arrive in the response
    language."""

    images: Optional[list[Image1]] = UNSET
    rating: Optional[float] = UNSET
    """Product rating"""

    reviews: Optional[str] = UNSET
    """Product review count"""

    variants: Optional[list[Any]] = UNSET
    """Product variants Google offers"""

    user_reviews: Optional[list[Any]] = Field(default=UNSET, alias="userReviews")
    """User reviews"""

    related_products: Optional[list[Any]] = Field(default=UNSET, alias="relatedProducts")
    """Related products"""


class ProductResultDict(TypedDict):
    title: str
    stores: NotRequired[list[StoreDict]]
    about_the_product: NotRequired[AboutTheProductDict]
    specifications: NotRequired[dict[str, str]]
    images: NotRequired[list[Image1Dict]]
    rating: NotRequired[float]
    reviews: NotRequired[str]
    variants: NotRequired[list[Any]]
    user_reviews: NotRequired[list[Any]]
    related_products: NotRequired[list[Any]]
