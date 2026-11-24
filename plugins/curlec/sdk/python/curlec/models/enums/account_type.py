from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class AccountType(str, Enum):
    BANK_ACCOUNT = "bank_account"
    VPA = "vpa"

    __str__ = str.__str__


AccountTypeOrStr: TypeAlias = Annotated[AccountType | str, open_enum_validator(AccountType)]
