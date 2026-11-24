from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ClassConnectTransactionsApi(str, Enum):
    """Describes the class(type) of transaction."""

    BANK_FEE = "bank-fee"
    PAYMENT = "payment"
    CASH_WITHDRAWAL = "cash-withdrawal"
    TRANSFER = "transfer"
    LOAN_INTEREST = "loan-interest"
    REFUND = "refund"
    DIRECT_CREDIT = "direct-credit"
    INTEREST = "interest"
    LOAN_REPAYMENT = "loan-repayment"

    __str__ = str.__str__


ClassConnectTransactionsApiOrStr: TypeAlias = Annotated[
    ClassConnectTransactionsApi | str, open_enum_validator(ClassConnectTransactionsApi)
]
