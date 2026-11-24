from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CardAccountType(str, Enum):
    """Card Account response type."""

    UNDEFINED = "UNDEFINED"
    CREDIT_CARD = "CREDIT_CARD"
    DEBIT_CARD = "DEBIT_CARD"
    PREPAID_CARD = "PREPAID_CARD"
    UNKNOWN = "UNKNOWN"

    __str__ = str.__str__


CardAccountTypeOrStr: TypeAlias = Annotated[CardAccountType | str, open_enum_validator(CardAccountType)]
