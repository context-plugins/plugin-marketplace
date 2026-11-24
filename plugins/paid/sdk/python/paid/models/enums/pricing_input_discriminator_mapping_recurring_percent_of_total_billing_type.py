from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType | str,
    open_enum_validator(PricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType),
]
