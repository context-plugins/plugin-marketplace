from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreateOrderLineAttributeRequestPricingSignalType(str, Enum):
    ACTIVITY = "activity"
    OUTCOME = "outcome"

    __str__ = str.__str__


CreateOrderLineAttributeRequestPricingSignalTypeOrStr: TypeAlias = Annotated[
    CreateOrderLineAttributeRequestPricingSignalType | str,
    open_enum_validator(CreateOrderLineAttributeRequestPricingSignalType),
]
