from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BankAccountOwnerType(str, Enum):
    """BankAccountOwnerType Enum."""

    BUSINESS = "BUSINESS"
    PERSONAL = "PERSONAL"

    __str__ = str.__str__


BankAccountOwnerTypeOrStr: TypeAlias = Annotated[BankAccountOwnerType | str, open_enum_validator(BankAccountOwnerType)]
