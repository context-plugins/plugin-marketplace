from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .order_line1 import OrderLine1, OrderLine1Dict
from .pagination import Pagination, PaginationDict


class OrderLinesResponse(SdkBaseModel):
    data: list[OrderLine1]
    pagination: Pagination


class OrderLinesResponseDict(TypedDict):
    data: list[OrderLine1Dict]
    pagination: PaginationDict
