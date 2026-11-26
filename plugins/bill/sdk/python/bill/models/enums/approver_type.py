from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ApproverType(str, Enum):
    r"""Spend \& Expense transactions approver type."""

    ADMIN = "ADMIN"
    MANAGER = "MANAGER"
    NEXT_MANAGER = "NEXT_MANAGER"
    BUDGET_OWNER = "BUDGET_OWNER"
    BOOKKEEPER = "BOOKKEEPER"
    SPECIFIC_PERSON = "SPECIFIC_PERSON"

    __str__ = str.__str__


ApproverTypeOrStr: TypeAlias = Annotated[ApproverType | str, open_enum_validator(ApproverType)]
