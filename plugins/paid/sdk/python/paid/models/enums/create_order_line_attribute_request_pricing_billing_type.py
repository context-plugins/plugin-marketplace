from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreateOrderLineAttributeRequestPricingBillingType(str, Enum):
    ADVANCE = "advance"
    ARREARS = "arrears"

    __str__ = str.__str__


CreateOrderLineAttributeRequestPricingBillingTypeOrStr: TypeAlias = Annotated[
    CreateOrderLineAttributeRequestPricingBillingType | str,
    open_enum_validator(CreateOrderLineAttributeRequestPricingBillingType),
]
