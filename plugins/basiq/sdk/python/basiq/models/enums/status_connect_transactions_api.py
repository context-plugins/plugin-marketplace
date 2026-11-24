from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusConnectTransactionsApi(str, Enum):
    """Identifies if a transaction is pending or posted. A pending transaction is an approved debit or credit
    transaction that has not been fully processed yet (i.e. has not been posted). Note that pending transactions are not
    available for all institutions."""

    PENDING = "pending"
    POSTED = "posted"

    __str__ = str.__str__


StatusConnectTransactionsApiOrStr: TypeAlias = Annotated[
    StatusConnectTransactionsApi | str, open_enum_validator(StatusConnectTransactionsApi)
]
