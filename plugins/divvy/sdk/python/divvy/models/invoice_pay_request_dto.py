from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class InvoicePayRequestDto(SdkBaseModel):
    """Invoice Payment request."""

    invoice_id: str = Field(alias="invoiceId")
    """BILL-generated ID of the invoice. The value begins with ``00e``."""

    amount: float
    """Payment amount. For a payment in an international currency (not USD), this value is in the local currency."""


class InvoicePayRequestDtoDict(TypedDict):
    invoice_id: str
    amount: float
