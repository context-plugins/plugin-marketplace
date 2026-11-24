from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Id(str, Enum):
    """Unique identifier for the Insight type. Maps to the ``insightType`` values used by existing Insight endpoints:
    ``account``, ``balance``, ``identity``, ``income``, ``expense-ratio``."""

    ACCOUNT_VERIFICATION = "ACCOUNT_VERIFICATION"
    BALANCE_VERIFICATION = "BALANCE_VERIFICATION"
    IDENTITY_VERIFICATION = "IDENTITY_VERIFICATION"
    INCOME_VERIFICATION = "INCOME_VERIFICATION"
    EXPENSE_RATIO_VERIFICATION = "EXPENSE_RATIO_VERIFICATION"

    __str__ = str.__str__


IdOrStr: TypeAlias = Annotated[Id | str, open_enum_validator(Id)]
