from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .available_products import AvailableProducts, AvailableProductsDict
from .products import Products, ProductsDict


class Configuration(SdkBaseModel):
    """Some details associated with the current session."""

    available_products: OptionalNullable[AvailableProducts] = UNSET
    products: Optional[Products] = UNSET
    """Products and theirs availability"""


class ConfigurationDict(TypedDict):
    available_products: NotRequired[AvailableProductsDict | None]
    products: NotRequired[ProductsDict]
