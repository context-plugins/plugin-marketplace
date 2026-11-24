from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .checkout_product import CheckoutProduct, CheckoutProductDict


class Products(SdkBaseModel):
    """Products and theirs availability"""

    installments: Optional[CheckoutProduct] = UNSET


class ProductsDict(TypedDict):
    installments: NotRequired[CheckoutProductDict]
