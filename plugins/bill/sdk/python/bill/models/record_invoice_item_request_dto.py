from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class RecordInvoiceItemRequestDto(SdkBaseModel):
    """Record invoice item dto."""

    id: str
    """BILL-generated ID of the invoice. The value begins with ``00e``."""

    amount: float
    """Payment amount. For a payment in an international currency (not USD), this value is in the local currency.

    **Note**: You cannot overpay an invoice."""


class RecordInvoiceItemRequestDtoDict(TypedDict):
    id: str
    amount: float
