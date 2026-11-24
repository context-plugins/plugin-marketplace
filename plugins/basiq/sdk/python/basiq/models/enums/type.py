from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Type(str, Enum):
    """Account type"""

    TRANSACTION = "transaction"
    SAVINGS = "savings"
    CREDIT_CARD = "credit-card"
    MORTGAGE = "mortgage"
    LOAN = "loan"
    INVESTMENT = "investment"
    TERM_DEPOSIT = "term-deposit"
    INSURANCE = "insurance"
    FOREIGN = "foreign"
    UNKNOWN = "unknown"

    __str__ = str.__str__


TypeOrStr: TypeAlias = Annotated[Type | str, open_enum_validator(Type)]
