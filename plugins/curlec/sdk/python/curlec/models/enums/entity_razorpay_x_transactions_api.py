from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayXTransactionsApi(str, Enum):
    TRANSACTION = "transaction"

    __str__ = str.__str__


EntityRazorpayXTransactionsApiOrStr: TypeAlias = Annotated[
    EntityRazorpayXTransactionsApi | str, open_enum_validator(EntityRazorpayXTransactionsApi)
]
