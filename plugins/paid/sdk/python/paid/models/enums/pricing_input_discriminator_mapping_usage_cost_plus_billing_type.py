from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingUsageCostPlusBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


PricingInputDiscriminatorMappingUsageCostPlusBillingTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingUsageCostPlusBillingType | str,
    open_enum_validator(PricingInputDiscriminatorMappingUsageCostPlusBillingType),
]
