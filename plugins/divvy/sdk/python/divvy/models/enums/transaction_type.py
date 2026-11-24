from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TransactionType(str, Enum):
    """TransactionType."""

    CLEAR = "CLEAR"
    DECLINE = "DECLINE"
    AUTHORIZATION = "AUTHORIZATION"

    __str__ = str.__str__


TransactionTypeOrStr: TypeAlias = Annotated[TransactionType | str, open_enum_validator(TransactionType)]
