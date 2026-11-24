from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingRecurringVolumeBillingFrequency(str, Enum):
    MONTHLY = "Monthly"
    QUARTERLY = "Quarterly"
    SEMI_ANNUALLY = "Semi-Annually"
    ANNUAL = "Annual"
    CUSTOM = "Custom"

    __str__ = str.__str__


PricingInputDiscriminatorMappingRecurringVolumeBillingFrequencyOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingRecurringVolumeBillingFrequency | str,
    open_enum_validator(PricingInputDiscriminatorMappingRecurringVolumeBillingFrequency),
]
