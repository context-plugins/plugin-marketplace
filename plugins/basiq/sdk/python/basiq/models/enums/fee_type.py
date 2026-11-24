from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class FeeType(str, Enum):
    """(mandatory) - The type of fee."""

    DEPOSIT = "DEPOSIT"
    EVENT = "EVENT"
    EXIT = "EXIT"
    PAYMENT = "PAYMENT"
    PERIODIC = "PERIODIC"
    PURCHASE = "PURCHASE"
    TRANSACTION = "TRANSACTION"
    UPFRONT = "UPFRONT"
    VARIABLE = "VARIABLE"
    WITHDRAWAL = "WITHDRAWAL"

    __str__ = str.__str__


FeeTypeOrStr: TypeAlias = Annotated[FeeType | str, open_enum_validator(FeeType)]
