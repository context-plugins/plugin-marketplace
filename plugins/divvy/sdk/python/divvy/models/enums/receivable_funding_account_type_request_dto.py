from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReceivableFundingAccountTypeRequestDto(str, Enum):
    """Receivable funding account type for receivable payment API."""

    BANK_ACCOUNT = "BANK_ACCOUNT"

    __str__ = str.__str__


ReceivableFundingAccountTypeRequestDtoOrStr: TypeAlias = Annotated[
    ReceivableFundingAccountTypeRequestDto | str, open_enum_validator(ReceivableFundingAccountTypeRequestDto)
]
