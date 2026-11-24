from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .sales_invoice import SalesInvoice, SalesInvoiceDict


class CompaniesApiSalesInvoicesResponse(SdkBaseModel):
    value: Optional[list[SalesInvoice]] = UNSET


class CompaniesApiSalesInvoicesResponseDict(TypedDict):
    value: NotRequired[list[SalesInvoiceDict]]
