from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingUsageVolumeBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingUsageVolumeBillingTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingUsageVolumeBillingType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingUsageVolumeBillingType),
]
