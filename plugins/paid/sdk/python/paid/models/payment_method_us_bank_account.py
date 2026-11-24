from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.payment_method_us_bank_account_account_type import PaymentMethodUsBankAccountAccountTypeOrStr


class PaymentMethodUsBankAccount(SdkBaseModel):
    """US bank account details (present when type is 'us_bank_account')"""

    bank_name: Optional[str] = Field(default=UNSET, alias="bankName")
    last4: Optional[str] = UNSET
    """Last 4 digits of the account number"""

    account_type: Optional[PaymentMethodUsBankAccountAccountTypeOrStr] = Field(default=UNSET, alias="accountType")


class PaymentMethodUsBankAccountDict(TypedDict):
    bank_name: NotRequired[str]
    last4: NotRequired[str]
    account_type: NotRequired[PaymentMethodUsBankAccountAccountTypeOrStr]
