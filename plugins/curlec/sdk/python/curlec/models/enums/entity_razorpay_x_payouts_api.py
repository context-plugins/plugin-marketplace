from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayXPayoutsApi(str, Enum):
    PAYOUT = "payout"

    __str__ = str.__str__


EntityRazorpayXPayoutsApiOrStr: TypeAlias = Annotated[
    EntityRazorpayXPayoutsApi | str, open_enum_validator(EntityRazorpayXPayoutsApi)
]
