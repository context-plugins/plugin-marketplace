from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingRecurringGraduatedBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


PricingInputDiscriminatorMappingRecurringGraduatedBillingTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingRecurringGraduatedBillingType | str,
    open_enum_validator(PricingInputDiscriminatorMappingRecurringGraduatedBillingType),
]
