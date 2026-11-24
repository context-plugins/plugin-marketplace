from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .checkout import Checkout, CheckoutDict
from .pagination import Pagination, PaginationDict


class CheckoutListResponse(SdkBaseModel):
    data: list[Checkout]
    pagination: Pagination


class CheckoutListResponseDict(TypedDict):
    data: list[CheckoutDict]
    pagination: PaginationDict
