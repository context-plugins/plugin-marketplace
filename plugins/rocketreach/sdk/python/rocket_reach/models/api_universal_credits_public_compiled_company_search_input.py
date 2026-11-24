from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_query import CompanyQuery, CompanyQueryDict
from .enums.order_by_enum import OrderByEnum, OrderByEnumOrStr


class ApiUniversalCreditsPublicCompiledCompanySearchInput(SdkBaseModel):
    start: int = 1
    """Paginate through search results by returning results starting from this value (counting from 1)."""

    page_size: int = 100
    """Maximum number of search results to return per page."""

    query: Optional[CompanyQuery] = UNSET
    order_by: OrderByEnumOrStr = OrderByEnum.RELEVANCE


class ApiUniversalCreditsPublicCompiledCompanySearchInputDict(TypedDict):
    start: NotRequired[int]
    page_size: NotRequired[int]
    query: NotRequired[CompanyQueryDict]
    order_by: NotRequired[OrderByEnumOrStr]
