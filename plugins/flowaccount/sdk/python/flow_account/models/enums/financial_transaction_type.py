from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FinancialTransactionType(int, Enum):
    """1 = Debit 3 = Credit"""

    VALUE_1 = 1
    VALUE_3 = 3

    __str__ = str.__str__


FinancialTransactionTypeOrInt: TypeAlias = Annotated[
    FinancialTransactionType | int, open_enum_validator(FinancialTransactionType)
]
