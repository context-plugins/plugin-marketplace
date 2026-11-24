from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PlanPricingBillingFrequency(str, Enum):
    """The billing frequency for the plan"""

    MONTHLY = "monthly"
    QUARTERLY = "quarterly"
    SEMI_ANNUALLY = "semi-annually"
    YEARLY = "yearly"
    CUSTOM = "custom"

    __str__ = str.__str__


PlanPricingBillingFrequencyOrStr: TypeAlias = Annotated[
    PlanPricingBillingFrequency | str, open_enum_validator(PlanPricingBillingFrequency)
]
