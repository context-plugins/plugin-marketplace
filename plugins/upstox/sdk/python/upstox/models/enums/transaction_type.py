from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TransactionType(str, Enum):
    """Indicates whether its a buy or sell order"""

    BUY = "BUY"
    SELL = "SELL"

    __str__ = str.__str__


TransactionTypeOrStr: TypeAlias = Annotated[TransactionType | str, open_enum_validator(TransactionType)]
