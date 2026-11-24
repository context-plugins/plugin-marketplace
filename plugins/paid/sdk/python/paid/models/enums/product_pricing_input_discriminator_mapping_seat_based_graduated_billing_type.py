from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingSeatBasedGraduatedBillingType),
]
