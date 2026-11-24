from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayXBankingBalancesApi(str, Enum):
    BANKING_BALANCE = "banking_balance"

    __str__ = str.__str__


EntityRazorpayXBankingBalancesApiOrStr: TypeAlias = Annotated[
    EntityRazorpayXBankingBalancesApi | str, open_enum_validator(EntityRazorpayXBankingBalancesApi)
]
