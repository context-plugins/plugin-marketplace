from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .invoice_line import InvoiceLine, InvoiceLineDict
from .pagination import Pagination, PaginationDict


class InvoiceLinesResponse(SdkBaseModel):
    data: list[InvoiceLine]
    pagination: Pagination


class InvoiceLinesResponseDict(TypedDict):
    data: list[InvoiceLineDict]
    pagination: PaginationDict
