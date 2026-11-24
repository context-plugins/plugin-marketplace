from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PaymentMethodEnum(str, Enum):
    ACH = "ach"
    CARD = "card"
    CASH = "cash"
    CHECK = "check"
    DIGITAL_WALLET = "digital_wallet"
    DONOR_ADVISED_FUND = "donor_advised_fund"
    PAYPAL = "paypal"
    VENMO = "venmo"
    CASHAPP = "cashapp"
    TERMINAL = "terminal"
    STOCK = "stock"
    IN_KIND = "in-kind"
    PROPERTY = "property"
    OTHER = "other"
    NONE = "none"

    __str__ = str.__str__


PaymentMethodEnumOrStr: TypeAlias = Annotated[PaymentMethodEnum | str, open_enum_validator(PaymentMethodEnum)]
