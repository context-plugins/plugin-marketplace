from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingRecurringPerUnitBillingType),
]
