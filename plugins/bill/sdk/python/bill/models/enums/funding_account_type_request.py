from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FundingAccountTypeRequest(str, Enum):
    """Funading account type for Payments API."""

    BANK_ACCOUNT = "BANK_ACCOUNT"
    CARD_ACCOUNT = "CARD_ACCOUNT"
    WALLET = "WALLET"
    AP_CARD = "AP_CARD"

    __str__ = str.__str__


FundingAccountTypeRequestOrStr: TypeAlias = Annotated[
    FundingAccountTypeRequest | str, open_enum_validator(FundingAccountTypeRequest)
]
