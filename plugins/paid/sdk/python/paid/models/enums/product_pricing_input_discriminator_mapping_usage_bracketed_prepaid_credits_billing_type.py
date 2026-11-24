from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsBillingType),
]
