from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, RFC3339DateTime, SdkBaseModel
from .enums.payment_method_type import PaymentMethodTypeOrStr
from .payment_method_card import PaymentMethodCard, PaymentMethodCardDict
from .payment_method_us_bank_account import PaymentMethodUsBankAccount, PaymentMethodUsBankAccountDict


class PaymentMethod(SdkBaseModel):
    """A customer's payment method"""

    id: Optional[str] = UNSET
    """The payment method ID (typically from Stripe)"""

    type_: Optional[PaymentMethodTypeOrStr] = Field(default=UNSET, alias="type")
    """The type of payment method"""

    card: Optional[PaymentMethodCard] = UNSET
    """Card details (present when type is 'card')"""

    us_bank_account: Optional[PaymentMethodUsBankAccount] = Field(default=UNSET, alias="usBankAccount")
    """US bank account details (present when type is 'us_bank_account')"""

    is_default: Optional[bool] = Field(default=UNSET, alias="isDefault")
    """Whether this is the customer's default payment method"""

    created_at: Optional[RFC3339DateTime] = Field(default=UNSET, alias="createdAt")


class PaymentMethodDict(TypedDict):
    id: NotRequired[str]
    type_: NotRequired[PaymentMethodTypeOrStr]
    card: NotRequired[PaymentMethodCardDict]
    us_bank_account: NotRequired[PaymentMethodUsBankAccountDict]
    is_default: NotRequired[bool]
    created_at: NotRequired[RFC3339DateTime]
