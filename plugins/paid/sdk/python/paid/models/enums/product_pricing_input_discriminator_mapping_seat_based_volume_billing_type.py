from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingSeatBasedVolumeBillingType),
]
