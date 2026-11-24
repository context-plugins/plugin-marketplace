from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .customer_group_summary import CustomerGroupSummary, CustomerGroupSummaryDict
from .pagination import Pagination, PaginationDict


class CustomerGroupListResponse(SdkBaseModel):
    data: list[CustomerGroupSummary]
    pagination: Pagination


class CustomerGroupListResponseDict(TypedDict):
    data: list[CustomerGroupSummaryDict]
    pagination: PaginationDict
