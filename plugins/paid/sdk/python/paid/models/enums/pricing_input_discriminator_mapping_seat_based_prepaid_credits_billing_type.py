from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType | str,
    open_enum_validator(PricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType),
]
