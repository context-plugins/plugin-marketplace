from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel


class BillUpdateInvoiceRequestDto(SdkBaseModel):
    """Invoice linked to a bill."""

    invoice_number: Optional[str] = Field(default=UNSET, alias="invoiceNumber")
    """User-generated invoice number. This value can be your chosen number scheme or bill due date."""

    invoice_date: Optional[Date] = Field(default=UNSET, alias="invoiceDate")
    """Date when the invoice is sent. This value is in the ``yyyy-MM-dd`` format."""


class BillUpdateInvoiceRequestDtoDict(TypedDict):
    invoice_number: NotRequired[str]
    invoice_date: NotRequired[Date]
