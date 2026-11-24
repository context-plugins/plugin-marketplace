from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .product import Product, ProductDict


class ProductSubmissionRequest(SdkBaseModel):
    products: list[Product]
    """The list of products to create or update."""


class ProductSubmissionRequestDict(TypedDict):
    products: list[ProductDict]
