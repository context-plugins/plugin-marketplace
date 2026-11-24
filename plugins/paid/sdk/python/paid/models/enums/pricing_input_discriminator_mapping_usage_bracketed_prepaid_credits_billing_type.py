from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType | str,
    open_enum_validator(PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType),
]
