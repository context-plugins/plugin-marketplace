from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingUsagePerUnitBillingTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingUsagePerUnitBillingType),
]
