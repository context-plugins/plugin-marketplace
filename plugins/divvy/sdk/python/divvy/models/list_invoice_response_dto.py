from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .invoice_response_dto import InvoiceResponseDto, InvoiceResponseDtoDict


class ListInvoiceResponseDto(SdkBaseModel):
    """Get list of invoices response."""

    next_page: Optional[str] = Field(default=UNSET, alias="nextPage")
    prev_page: Optional[str] = Field(default=UNSET, alias="prevPage")
    results: Optional[list[InvoiceResponseDto]] = UNSET
    count: Optional[int] = UNSET
    """Total number of invoices matching the list request filters, across all pages of results."""

    total_due_amount: Optional[float] = Field(default=UNSET, alias="totalDueAmount")
    """Sum of the balance due of all invoices matching the list request filters, across all pages of results. This value
    is in the organization's base currency. For invoices issued in a foreign currency, the invoice's exchange rate is
    applied."""


class ListInvoiceResponseDtoDict(TypedDict):
    next_page: NotRequired[str]
    prev_page: NotRequired[str]
    results: NotRequired[list[InvoiceResponseDtoDict]]
    count: NotRequired[int]
    total_due_amount: NotRequired[float]
