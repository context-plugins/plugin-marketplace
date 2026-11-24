from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingRecurringVolumeBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


PricingInputDiscriminatorMappingRecurringVolumeBillingTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingRecurringVolumeBillingType | str,
    open_enum_validator(PricingInputDiscriminatorMappingRecurringVolumeBillingType),
]
