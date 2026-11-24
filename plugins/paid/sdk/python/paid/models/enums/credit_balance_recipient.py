from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreditBalanceRecipient(str, Enum):
    ORGANIZATION = "organization"
    SEAT = "seat"

    __str__ = str.__str__


CreditBalanceRecipientOrStr: TypeAlias = Annotated[
    CreditBalanceRecipient | str, open_enum_validator(CreditBalanceRecipient)
]
