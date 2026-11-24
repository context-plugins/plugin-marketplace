from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Entity2RazorpayVirtualAccountsApi(str, Enum):
    PAYMENT = "payment"

    __str__ = str.__str__


Entity2RazorpayVirtualAccountsApiOrStr: TypeAlias = Annotated[
    Entity2RazorpayVirtualAccountsApi | str, open_enum_validator(Entity2RazorpayVirtualAccountsApi)
]
