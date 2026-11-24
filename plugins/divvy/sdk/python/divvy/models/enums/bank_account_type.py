from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BankAccountType(str, Enum):
    """BankAccountType Enum."""

    CHECKING = "CHECKING"
    SAVINGS = "SAVINGS"

    __str__ = str.__str__


BankAccountTypeOrStr: TypeAlias = Annotated[BankAccountType | str, open_enum_validator(BankAccountType)]
