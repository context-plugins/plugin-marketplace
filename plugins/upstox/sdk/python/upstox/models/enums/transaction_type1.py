from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TransactionType1(str, Enum):
    """Indicates whether the order was a buy or sell order"""

    BUY = "BUY"
    SELL = "SELL"

    __str__ = str.__str__


TransactionType1OrStr: TypeAlias = Annotated[TransactionType1 | str, open_enum_validator(TransactionType1)]
