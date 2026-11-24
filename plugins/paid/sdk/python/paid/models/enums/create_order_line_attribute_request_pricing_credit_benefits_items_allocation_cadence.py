from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreateOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadence(str, Enum):
    UPFRONT = "upfront"
    MONTHLY = "monthly"

    __str__ = str.__str__


CreateOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadenceOrStr: TypeAlias = Annotated[
    CreateOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadence | str,
    open_enum_validator(CreateOrderLineAttributeRequestPricingCreditBenefitsItemsAllocationCadence),
]
