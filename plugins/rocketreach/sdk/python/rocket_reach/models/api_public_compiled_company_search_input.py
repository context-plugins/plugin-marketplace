from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .company_query1 import CompanyQuery1, CompanyQuery1Dict
from .enums.order_by_enum import OrderByEnum, OrderByEnumOrStr


class ApiPublicCompiledCompanySearchInput(SdkBaseModel):
    start: int = 1
    """Start index of the request results (counting from 1)"""

    page_size: int = 10
    """Maximum number of results to return per page [1-100]"""

    query: Optional[CompanyQuery1] = UNSET
    """Search query object for the request"""

    order_by: OrderByEnumOrStr = OrderByEnum.RELEVANCE
    """Specifies the ordering of search results. "popularity" matches the default ordering of the Search web app."""


class ApiPublicCompiledCompanySearchInputDict(TypedDict):
    start: NotRequired[int]
    page_size: NotRequired[int]
    query: NotRequired[CompanyQuery1Dict]
    order_by: NotRequired[OrderByEnumOrStr]
