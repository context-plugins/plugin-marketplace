from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .payment_purpose1_bill_v3_vendors_api import PaymentPurpose1BillV3VendorsApi, PaymentPurpose1BillV3VendorsApiDict


class PaymentInformationRequestUpdate(SdkBaseModel):
    """Common payment information POJO."""

    payee_name: Optional[str] = Field(default=UNSET, alias="payeeName")
    """Vendor name for check and electronic payments"""

    email: Optional[str] = UNSET
    """Vendor email address for receiving payment information. BILL uses the vendor ``email`` value when this payment
    ``email`` value is not set."""

    payment_purpose: Optional[PaymentPurpose1BillV3VendorsApi] = Field(default=UNSET, alias="paymentPurpose")


class PaymentInformationRequestUpdateDict(TypedDict):
    payee_name: NotRequired[str]
    email: NotRequired[str]
    payment_purpose: NotRequired[PaymentPurpose1BillV3VendorsApiDict]
