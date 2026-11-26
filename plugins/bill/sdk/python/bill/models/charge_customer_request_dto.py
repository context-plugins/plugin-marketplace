from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Date, Optional, SdkBaseModel
from .funding_account2 import FundingAccount2, FundingAccount2Dict
from .invoice_pay_request_dto import InvoicePayRequestDto, InvoicePayRequestDtoDict


class ChargeCustomerRequestDto(SdkBaseModel):
    """Charge a customer"""

    customer_id: str = Field(alias="customerId")
    """BILL-generated ID of the customer. The value begins with ``0cu``."""

    funding_account: FundingAccount2 = Field(alias="fundingAccount")
    description: Optional[str] = UNSET
    """Invoice payment description. This value is included in the check memo or in the bank descriptor for electronic
    payments."""

    payment_date: Optional[Date] = Field(default=UNSET, alias="paymentDate")
    """Received payment date. Funds are withdrawn from the customer bank account on this date.This value is in the
    ``yyyy-MM-dd`` format."""

    invoice_payments: list[InvoicePayRequestDto] = Field(alias="invoicePayments")
    """List of invoices to be paid"""


class ChargeCustomerRequestDtoDict(TypedDict):
    customer_id: str
    funding_account: FundingAccount2Dict
    description: NotRequired[str]
    payment_date: NotRequired[Date]
    invoice_payments: list[InvoicePayRequestDtoDict]
