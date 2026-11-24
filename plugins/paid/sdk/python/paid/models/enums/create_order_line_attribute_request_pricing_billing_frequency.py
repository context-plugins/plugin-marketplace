from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreateOrderLineAttributeRequestPricingBillingFrequency(str, Enum):
    MONTHLY = "monthly"
    QUARTERLY = "quarterly"
    SEMI_ANNUALLY = "semiAnnually"
    ANNUAL = "annual"
    CUSTOM = "custom"

    __str__ = str.__str__


CreateOrderLineAttributeRequestPricingBillingFrequencyOrStr: TypeAlias = Annotated[
    CreateOrderLineAttributeRequestPricingBillingFrequency | str,
    open_enum_validator(CreateOrderLineAttributeRequestPricingBillingFrequency),
]
