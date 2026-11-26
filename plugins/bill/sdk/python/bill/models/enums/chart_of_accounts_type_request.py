from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ChartOfAccountsTypeRequest(str, Enum):
    """Chart of accounts type."""

    UNSPECIFIED = "UNSPECIFIED"
    ACCOUNTS_PAYABLE = "ACCOUNTS_PAYABLE"
    ACCOUNTS_RECEIVABLE = "ACCOUNTS_RECEIVABLE"
    BANK = "BANK"
    COST_OF_GOODS_SOLD = "COST_OF_GOODS_SOLD"
    CREDIT_CARD = "CREDIT_CARD"
    EQUITY = "EQUITY"
    EXPENSE = "EXPENSE"
    FIXED_ASSET = "FIXED_ASSET"
    INCOME = "INCOME"
    LONG_TERM_LIABILITY = "LONG_TERM_LIABILITY"
    OTHER_ASSET = "OTHER_ASSET"
    OTHER_CURRENT_ASSET = "OTHER_CURRENT_ASSET"
    OTHER_CURRENT_LIABILITY = "OTHER_CURRENT_LIABILITY"
    OTHER_EXPENSE = "OTHER_EXPENSE"
    OTHER_INCOME = "OTHER_INCOME"
    NON_POSTING = "NON_POSTING"

    __str__ = str.__str__


ChartOfAccountsTypeRequestOrStr: TypeAlias = Annotated[
    ChartOfAccountsTypeRequest | str, open_enum_validator(ChartOfAccountsTypeRequest)
]
