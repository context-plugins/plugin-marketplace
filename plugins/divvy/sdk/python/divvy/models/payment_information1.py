from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .bank_account1 import BankAccount1, BankAccount1Dict
from .enums.disbursement_sub_type import DisbursementSubTypeOrStr
from .enums.pay_by_type import PayByTypeOrStr
from .enums.transfer_method import TransferMethodOrStr
from .payment_purpose3 import PaymentPurpose3, PaymentPurpose3Dict
from .virtual_card1 import VirtualCard1, VirtualCard1Dict


class PaymentInformation1(SdkBaseModel):
    payee_name: str = Field(alias="payeeName")
    """Vendor name for check and electronic payments. This field is overridden when you connect with a vendor in the
    BILL network."""

    email: Optional[str] = UNSET
    """Vendor email address for receiving payment information. BILL uses the vendor ``email`` value when this payment
    ``email`` value is not set."""

    last_payment_date: Optional[str] = Field(default=UNSET, alias="lastPaymentDate")
    """Last payment date"""

    pay_by_type: Optional[PayByTypeOrStr] = Field(default=UNSET, alias="payByType")
    pay_by_sub_type: Optional[DisbursementSubTypeOrStr] = Field(default=UNSET, alias="payBySubType")
    transfer_method: Optional[TransferMethodOrStr] = Field(default=UNSET, alias="transferMethod")
    virtual_card: Optional[VirtualCard1] = Field(default=UNSET, alias="virtualCard")
    bank_account: Optional[BankAccount1] = Field(default=UNSET, alias="bankAccount")
    payment_purpose: Optional[PaymentPurpose3] = Field(default=UNSET, alias="paymentPurpose")


class PaymentInformation1Dict(TypedDict):
    payee_name: str
    email: NotRequired[str]
    last_payment_date: NotRequired[str]
    pay_by_type: NotRequired[PayByTypeOrStr]
    pay_by_sub_type: NotRequired[DisbursementSubTypeOrStr]
    transfer_method: NotRequired[TransferMethodOrStr]
    virtual_card: NotRequired[VirtualCard1Dict]
    bank_account: NotRequired[BankAccount1Dict]
    payment_purpose: NotRequired[PaymentPurpose3Dict]
