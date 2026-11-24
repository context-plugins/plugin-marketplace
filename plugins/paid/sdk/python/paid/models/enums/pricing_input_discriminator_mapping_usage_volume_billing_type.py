from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingUsageVolumeBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


PricingInputDiscriminatorMappingUsageVolumeBillingTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingUsageVolumeBillingType | str,
    open_enum_validator(PricingInputDiscriminatorMappingUsageVolumeBillingType),
]
