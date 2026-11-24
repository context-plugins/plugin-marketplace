from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Entity1RazorpayXTransactionsApi(str, Enum):
    PAYOUT = "payout"
    BANK_TRANSFER = "bank_transfer"

    __str__ = str.__str__


Entity1RazorpayXTransactionsApiOrStr: TypeAlias = Annotated[
    Entity1RazorpayXTransactionsApi | str, open_enum_validator(Entity1RazorpayXTransactionsApi)
]
