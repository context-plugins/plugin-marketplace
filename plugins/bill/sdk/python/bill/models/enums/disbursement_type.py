from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class DisbursementType(str, Enum):
    """Enum for Disbursement type."""

    CHECK = "CHECK"
    ACH = "ACH"
    RPPS = "RPPS"
    PAYPAL = "PAYPAL"
    OFFLINE = "OFFLINE"
    INTERNATIONAL_E_PAYMENT = "INTERNATIONAL_E_PAYMENT"
    AMEX = "AMEX"
    VIRTUAL_CARD = "VIRTUAL_CARD"
    WALLET = "WALLET"
    CREDIT_CARD = "CREDIT_CARD"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


DisbursementTypeOrStr: TypeAlias = Annotated[DisbursementType | str, open_enum_validator(DisbursementType)]
