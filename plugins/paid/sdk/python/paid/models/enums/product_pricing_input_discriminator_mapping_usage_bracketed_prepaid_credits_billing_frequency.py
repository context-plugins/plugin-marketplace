from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency(str, Enum):
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    SEMI_ANNUALLY = "Semi-Annually"
    ANNUAL = "Annual"
    CUSTOM = "Custom"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequencyOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingFrequency),
]
