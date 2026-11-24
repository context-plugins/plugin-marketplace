from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class RoleType(str, Enum):
    r"""Spend \& Expense User Role type information."""

    ADMIN = "ADMIN"
    APPROVER = "APPROVER"
    AUDITOR = "AUDITOR"
    BOOKKEEPER = "BOOKKEEPER"
    MEMBER = "MEMBER"
    FINANCE_ADMIN = "FINANCE_ADMIN"
    NO_ACCESS = "NO_ACCESS"

    __str__ = str.__str__


RoleTypeOrStr: TypeAlias = Annotated[RoleType | str, open_enum_validator(RoleType)]
