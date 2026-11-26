from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sales_order_line import SalesOrderLine, SalesOrderLineDict


class CompaniesApiSalesOrdersApiSalesOrderLinesResponse(SdkBaseModel):
    value: Optional[list[SalesOrderLine]] = UNSET


class CompaniesApiSalesOrdersApiSalesOrderLinesResponseDict(TypedDict):
    value: NotRequired[list[SalesOrderLineDict]]
