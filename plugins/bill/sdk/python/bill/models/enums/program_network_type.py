from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProgramNetworkType(str, Enum):
    r"""ProgramNetworkType enum for Spend \& Expense Transactions."""

    VISA = "VISA"
    MASTERCARD = "MASTERCARD"

    __str__ = str.__str__


ProgramNetworkTypeOrStr: TypeAlias = Annotated[ProgramNetworkType | str, open_enum_validator(ProgramNetworkType)]
