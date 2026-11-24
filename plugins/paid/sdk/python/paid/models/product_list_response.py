from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pagination import Pagination, PaginationDict
from .product1 import Product1, Product1Dict


class ProductListResponse(SdkBaseModel):
    data: list[Product1]
    pagination: Pagination


class ProductListResponseDict(TypedDict):
    data: list[Product1Dict]
    pagination: PaginationDict
