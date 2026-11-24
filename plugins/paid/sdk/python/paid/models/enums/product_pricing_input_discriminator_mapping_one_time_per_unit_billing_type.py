from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingOneTimePerUnitBillingType),
]
