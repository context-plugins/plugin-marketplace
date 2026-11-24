from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TypeRazorpaySettlementsApi(str, Enum):
    PAYMENT = "payment"
    REFUND = "refund"
    TRANSFER = "transfer"
    ADJUSTMENT = "adjustment"

    __str__ = str.__str__


TypeRazorpaySettlementsApiOrStr: TypeAlias = Annotated[
    TypeRazorpaySettlementsApi | str, open_enum_validator(TypeRazorpaySettlementsApi)
]
