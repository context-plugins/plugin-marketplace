from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingSeatBasedPerUnitBillingType),
]
