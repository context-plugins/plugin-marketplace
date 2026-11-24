from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .customer1 import Customer1, Customer1Dict
from .pagination import Pagination, PaginationDict


class CustomerListResponse(SdkBaseModel):
    data: list[Customer1]
    pagination: Pagination


class CustomerListResponseDict(TypedDict):
    data: list[Customer1Dict]
    pagination: PaginationDict
