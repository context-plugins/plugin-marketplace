from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayRefundsApi(str, Enum):
    REFUND = "refund"

    __str__ = str.__str__


EntityRazorpayRefundsApiOrStr: TypeAlias = Annotated[
    EntityRazorpayRefundsApi | str, open_enum_validator(EntityRazorpayRefundsApi)
]
