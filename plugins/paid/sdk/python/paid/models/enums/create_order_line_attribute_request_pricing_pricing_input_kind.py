from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreateOrderLineAttributeRequestPricingPricingInputKind(str, Enum):
    SIGNAL_QUANTITY = "signalQuantity"

    __str__ = str.__str__


CreateOrderLineAttributeRequestPricingPricingInputKindOrStr: TypeAlias = Annotated[
    CreateOrderLineAttributeRequestPricingPricingInputKind | str,
    open_enum_validator(CreateOrderLineAttributeRequestPricingPricingInputKind),
]
