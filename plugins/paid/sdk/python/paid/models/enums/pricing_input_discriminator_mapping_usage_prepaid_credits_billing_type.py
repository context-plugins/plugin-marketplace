from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType | str,
    open_enum_validator(PricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType),
]
