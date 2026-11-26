from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .payment_vendor_credit_request_dto import PaymentVendorCreditRequestDto, PaymentVendorCreditRequestDtoDict


class BillPay(SdkBaseModel):
    """Bill pays details in Payments API."""

    bill_id: str = Field(alias="billId")
    """BILL-generated ID of the bill to be paid. The value begins with ``00n``."""

    amount: float
    """Payment amount"""

    vendor_credits: Optional[list[PaymentVendorCreditRequestDto]] = Field(default=UNSET, alias="vendorCredits")
    """Vendor credits applied to the bill payment"""


class BillPayDict(TypedDict):
    bill_id: str
    amount: float
    vendor_credits: NotRequired[list[PaymentVendorCreditRequestDtoDict]]
