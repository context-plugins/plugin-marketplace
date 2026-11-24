from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .order_seat import OrderSeat, OrderSeatDict
from .pagination import Pagination, PaginationDict


class OrderSeatListResponse(SdkBaseModel):
    data: list[OrderSeat]
    pagination: Pagination


class OrderSeatListResponseDict(TypedDict):
    data: list[OrderSeatDict]
    pagination: PaginationDict
