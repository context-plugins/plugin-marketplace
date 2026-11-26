from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ReceiptStatusTypeBillV3TransactionsApi(str, Enum):
    r"""ReceiptStatusType enum for Spend \& Expense Transactions."""

    VALIDATED = "VALIDATED"
    NOT_VALIDATED = "NOT_VALIDATED"
    ATTACHED = "ATTACHED"
    MISSING = "MISSING"
    NOT_REQUIRED = "NOT_REQUIRED"
    NOT_ATTACHED = "NOT_ATTACHED"

    __str__ = str.__str__


ReceiptStatusTypeBillV3TransactionsApiOrStr: TypeAlias = Annotated[
    ReceiptStatusTypeBillV3TransactionsApi | str, open_enum_validator(ReceiptStatusTypeBillV3TransactionsApi)
]
