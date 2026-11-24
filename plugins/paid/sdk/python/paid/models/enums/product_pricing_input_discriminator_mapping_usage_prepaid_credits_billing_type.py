from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsBillingType),
]
