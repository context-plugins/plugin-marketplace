from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingRecurringPercentOfTotalBillingType),
]
