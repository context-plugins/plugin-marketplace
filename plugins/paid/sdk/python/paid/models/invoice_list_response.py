from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .invoice import Invoice, InvoiceDict
from .pagination import Pagination, PaginationDict


class InvoiceListResponse(SdkBaseModel):
    data: list[Invoice]
    pagination: Pagination


class InvoiceListResponseDict(TypedDict):
    data: list[InvoiceDict]
    pagination: PaginationDict
