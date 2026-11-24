from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class BankAccountStatus(str, Enum):
    """Bank account status."""

    NOT_VERIFIED = "NOT_VERIFIED"
    VERIFIED = "VERIFIED"
    PENDING = "PENDING"
    BLOCKED = "BLOCKED"
    EXPIRED = "EXPIRED"
    INVALID = "INVALID"
    UNDEFINED = "UNDEFINED"

    __str__ = str.__str__


BankAccountStatusOrStr: TypeAlias = Annotated[BankAccountStatus | str, open_enum_validator(BankAccountStatus)]
