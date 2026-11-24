from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingSeatBasedPerUnitBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


PricingInputDiscriminatorMappingSeatBasedPerUnitBillingTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingSeatBasedPerUnitBillingType | str,
    open_enum_validator(PricingInputDiscriminatorMappingSeatBasedPerUnitBillingType),
]
