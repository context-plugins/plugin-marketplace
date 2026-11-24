from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EntityRazorpayPaymentsApi(str, Enum):
    PAYMENT = "payment"

    __str__ = str.__str__


EntityRazorpayPaymentsApiOrStr: TypeAlias = Annotated[
    EntityRazorpayPaymentsApi | str, open_enum_validator(EntityRazorpayPaymentsApi)
]
