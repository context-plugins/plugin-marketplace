from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .customer_alias import CustomerAlias, CustomerAliasDict
from .pagination import Pagination, PaginationDict


class CustomerAliasListResponse(SdkBaseModel):
    data: list[CustomerAlias]
    pagination: Pagination


class CustomerAliasListResponseDict(TypedDict):
    data: list[CustomerAliasDict]
    pagination: PaginationDict
