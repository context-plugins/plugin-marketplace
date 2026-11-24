from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .payment_vendor_credit_response_dto import PaymentVendorCreditResponseDto, PaymentVendorCreditResponseDtoDict


class RecordBillPayResponseDto(SdkBaseModel):
    """Record bill pay response dto."""

    id: Optional[str] = UNSET
    """BILL-generated ID of the bill payment. The value begins with ``blp``."""

    bill_id: Optional[str] = Field(default=UNSET, alias="billId")
    """BILL-generated ID of the bill. The value begins with ``00n``."""

    amount: Optional[float] = UNSET
    """Payment amount"""

    vendor_credits: Optional[list[PaymentVendorCreditResponseDto]] = Field(default=UNSET, alias="vendorCredits")
    """Vendor credits applied to the bill payment"""


class RecordBillPayResponseDtoDict(TypedDict):
    id: NotRequired[str]
    bill_id: NotRequired[str]
    amount: NotRequired[float]
    vendor_credits: NotRequired[list[PaymentVendorCreditResponseDtoDict]]
