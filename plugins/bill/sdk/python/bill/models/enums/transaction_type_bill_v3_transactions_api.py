from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TransactionTypeBillV3TransactionsApi(str, Enum):
    """TransactionType."""

    CLEAR = "CLEAR"
    DECLINE = "DECLINE"
    AUTHORIZATION = "AUTHORIZATION"
    OTHER = "OTHER"

    __str__ = str.__str__


TransactionTypeBillV3TransactionsApiOrStr: TypeAlias = Annotated[
    TransactionTypeBillV3TransactionsApi | str, open_enum_validator(TransactionTypeBillV3TransactionsApi)
]
