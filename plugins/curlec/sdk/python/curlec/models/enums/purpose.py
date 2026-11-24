from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Purpose(str, Enum):
    REFUND = "refund"
    CASHBACK = "cashback"
    PAYOUT = "payout"
    SALARY = "salary"
    UTILITY_BILL = "utility bill"
    VENDOR_BILL = "vendor bill"

    __str__ = str.__str__


PurposeOrStr: TypeAlias = Annotated[Purpose | str, open_enum_validator(Purpose)]
