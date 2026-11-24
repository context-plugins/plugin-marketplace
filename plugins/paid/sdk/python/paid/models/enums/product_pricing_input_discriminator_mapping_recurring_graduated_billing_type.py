from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingRecurringGraduatedBillingType),
]
