from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingUsageGraduatedBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


PricingInputDiscriminatorMappingUsageGraduatedBillingTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingUsageGraduatedBillingType | str,
    open_enum_validator(PricingInputDiscriminatorMappingUsageGraduatedBillingType),
]
