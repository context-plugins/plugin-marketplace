from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .order1 import Order1, Order1Dict
from .pagination import Pagination, PaginationDict


class OrderListResponse(SdkBaseModel):
    data: list[Order1]
    pagination: Pagination


class OrderListResponseDict(TypedDict):
    data: list[Order1Dict]
    pagination: PaginationDict
