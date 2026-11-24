from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency(str, Enum):
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    SEMI_ANNUALLY = "Semi-Annually"
    ANNUAL = "Annual"
    CUSTOM = "Custom"

    __str__ = str.__str__


PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequencyOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency | str,
    open_enum_validator(PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingFrequency),
]
