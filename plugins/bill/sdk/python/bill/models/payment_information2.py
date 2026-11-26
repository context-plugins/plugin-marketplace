from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bank_account_bill_v3_vendors_api import BankAccountBillV3VendorsApi, BankAccountBillV3VendorsApiDict
from .payment_purpose1_bill_v3_vendors_api import PaymentPurpose1BillV3VendorsApi, PaymentPurpose1BillV3VendorsApiDict


class PaymentInformation2(SdkBaseModel):
    payee_name: str = Field(alias="payeeName")
    """Vendor name for check and electronic payments. This field is overridden when you connect with a vendor in the
    BILL network."""

    email: Optional[str] = UNSET
    """Vendor email address for receiving payment information. BILL uses the vendor ``email`` value when this payment
    ``email`` value is not set."""

    bank_account: Optional[BankAccountBillV3VendorsApi] = Field(default=UNSET, alias="bankAccount")
    payment_purpose: Optional[PaymentPurpose1BillV3VendorsApi] = Field(default=UNSET, alias="paymentPurpose")


class PaymentInformation2Dict(TypedDict):
    payee_name: str
    email: NotRequired[str]
    bank_account: NotRequired[BankAccountBillV3VendorsApiDict]
    payment_purpose: NotRequired[PaymentPurpose1BillV3VendorsApiDict]
