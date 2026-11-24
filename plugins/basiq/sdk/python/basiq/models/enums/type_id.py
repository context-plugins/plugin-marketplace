from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeId(str, Enum):
    ACCOUNT_VERIFICATION = "ACCOUNT_VERIFICATION"
    BALANCE_VERIFICATION = "BALANCE_VERIFICATION"
    IDENTITY_VERIFICATION = "IDENTITY_VERIFICATION"
    INCOME_VERIFICATION = "INCOME_VERIFICATION"
    EXPENSE_RATIO_VERIFICATION = "EXPENSE_RATIO_VERIFICATION"

    __str__ = str.__str__


TypeIdOrStr: TypeAlias = Annotated[TypeId | str, open_enum_validator(TypeId)]
