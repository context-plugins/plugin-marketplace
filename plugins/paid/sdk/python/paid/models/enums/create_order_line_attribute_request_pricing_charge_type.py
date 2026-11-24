from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreateOrderLineAttributeRequestPricingChargeType(str, Enum):
    USAGE = "usage"
    RECURRING = "recurring"
    ONE_TIME = "oneTime"
    SEAT_BASED = "seatBased"

    __str__ = str.__str__


CreateOrderLineAttributeRequestPricingChargeTypeOrStr: TypeAlias = Annotated[
    CreateOrderLineAttributeRequestPricingChargeType | str,
    open_enum_validator(CreateOrderLineAttributeRequestPricingChargeType),
]
