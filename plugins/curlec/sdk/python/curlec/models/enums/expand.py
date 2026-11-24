from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Expand(str, Enum):
    PAYMENT = "payment"
    TRANSACTION_SETTLEMENT = "transaction.settlement"

    __str__ = str.__str__


ExpandOrStr: TypeAlias = Annotated[Expand | str, open_enum_validator(Expand)]
