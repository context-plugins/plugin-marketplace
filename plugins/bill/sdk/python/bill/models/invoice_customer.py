from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.currency_code import CurrencyCodeOrStr


class InvoiceCustomer(SdkBaseModel):
    """Customer info for an invoice."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the customer. The value begins with ``0cu``."""

    name: Optional[str] = UNSET
    """Customer name"""

    email: Optional[str] = UNSET
    """Customer email address"""

    invoice_currency: Optional[CurrencyCodeOrStr] = Field(default=UNSET, alias="invoiceCurrency")


class InvoiceCustomerDict(TypedDict):
    id: NotRequired[str]
    name: NotRequired[str]
    email: NotRequired[str]
    invoice_currency: NotRequired[CurrencyCodeOrStr]
