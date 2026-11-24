from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InsightType(str, Enum):
    """Type of insight returned"""

    EXPENSE_RATIO = "expense-ratio"
    BALANCE = "balance"
    ACCOUNT = "account"
    IDENTITY = "identity"
    INCOME = "income"

    __str__ = str.__str__


InsightTypeOrStr: TypeAlias = Annotated[InsightType | str, open_enum_validator(InsightType)]
