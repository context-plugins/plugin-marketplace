from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReceivableFundingAccountTypeResponse(str, Enum):
    """Receivable funding account type for receivable payment API."""

    BANK_ACCOUNT = "BANK_ACCOUNT"
    CARD_ACCOUNT = "CARD_ACCOUNT"

    __str__ = str.__str__


ReceivableFundingAccountTypeResponseOrStr: TypeAlias = Annotated[
    ReceivableFundingAccountTypeResponse | str, open_enum_validator(ReceivableFundingAccountTypeResponse)
]
