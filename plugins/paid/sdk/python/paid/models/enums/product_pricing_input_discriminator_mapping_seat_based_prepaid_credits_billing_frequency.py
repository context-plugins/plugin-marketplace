from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency(str, Enum):
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    SEMI_ANNUALLY = "Semi-Annually"
    ANNUAL = "Annual"
    CUSTOM = "Custom"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequencyOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency),
]
