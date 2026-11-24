from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingRecurringVolumeBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingRecurringVolumeBillingTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingRecurringVolumeBillingType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingRecurringVolumeBillingType),
]
