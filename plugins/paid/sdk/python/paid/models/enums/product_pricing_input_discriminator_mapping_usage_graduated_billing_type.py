from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingUsageGraduatedBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingUsageGraduatedBillingTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingUsageGraduatedBillingType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingUsageGraduatedBillingType),
]
