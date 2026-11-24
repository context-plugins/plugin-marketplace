from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentMethodType(str, Enum):
    """The type of payment method"""

    CARD = "card"
    US_BANK_ACCOUNT = "us_bank_account"
    SEPA_DEBIT = "sepa_debit"

    __str__ = str.__str__


PaymentMethodTypeOrStr: TypeAlias = Annotated[PaymentMethodType | str, open_enum_validator(PaymentMethodType)]
