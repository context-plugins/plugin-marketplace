from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingUsagePerUnitBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


PricingInputDiscriminatorMappingUsagePerUnitBillingTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingUsagePerUnitBillingType | str,
    open_enum_validator(PricingInputDiscriminatorMappingUsagePerUnitBillingType),
]
