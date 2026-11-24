from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class InputRoleType(str, Enum):
    r"""Spend \& Expense User role type for creating and updating a user's role."""

    ADMIN = "ADMIN"
    AUDITOR = "AUDITOR"
    BOOKKEEPER = "BOOKKEEPER"
    MEMBER = "MEMBER"

    __str__ = str.__str__


InputRoleTypeOrStr: TypeAlias = Annotated[InputRoleType | str, open_enum_validator(InputRoleType)]
