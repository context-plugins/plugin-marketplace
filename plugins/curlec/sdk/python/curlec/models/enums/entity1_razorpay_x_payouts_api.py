from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class Entity1RazorpayXPayoutsApi(str, Enum):
    FUND_ACCOUNT = "fund_account"

    __str__ = str.__str__


Entity1RazorpayXPayoutsApiOrStr: TypeAlias = Annotated[
    Entity1RazorpayXPayoutsApi | str, open_enum_validator(Entity1RazorpayXPayoutsApi)
]
