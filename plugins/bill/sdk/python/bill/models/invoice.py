from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import Date, SdkBaseModel


class Invoice(SdkBaseModel):
    """Invoice linked to a bill."""

    invoice_number: str = Field(alias="invoiceNumber")
    """User-generated invoice number. This value can be your chosen number scheme or bill due date."""

    invoice_date: Date = Field(alias="invoiceDate")
    """Date when the invoice is sent. This value is in the ``yyyy-MM-dd`` format."""


class InvoiceDict(TypedDict):
    invoice_number: str
    invoice_date: Date
