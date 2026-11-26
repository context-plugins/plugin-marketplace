from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sales_order import SalesOrder, SalesOrderDict


class CompaniesApiSalesOrdersResponse(SdkBaseModel):
    value: Optional[list[SalesOrder]] = UNSET


class CompaniesApiSalesOrdersResponseDict(TypedDict):
    value: NotRequired[list[SalesOrderDict]]
