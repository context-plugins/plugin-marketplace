from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BudgetRoleType(str, Enum):
    """Options for setting a user's role within a budget. DELETE removes the user from the budget."""

    MEMBER = "MEMBER"
    OWNER = "OWNER"
    OBSERVER = "OBSERVER"

    __str__ = str.__str__


BudgetRoleTypeOrStr: TypeAlias = Annotated[BudgetRoleType | str, open_enum_validator(BudgetRoleType)]
