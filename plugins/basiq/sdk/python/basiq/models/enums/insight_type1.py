from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InsightType1(str, Enum):
    """Type of insight: account verification, balance verification, identity verification, income verification, or
    expense-ratio"""

    ACCOUNT = "account"
    BALANCE = "balance"
    IDENTITY = "identity"
    INCOME = "income"
    EXPENSE_RATIO = "expense-ratio"

    __str__ = str.__str__


InsightType1OrStr: TypeAlias = Annotated[InsightType1 | str, open_enum_validator(InsightType1)]
