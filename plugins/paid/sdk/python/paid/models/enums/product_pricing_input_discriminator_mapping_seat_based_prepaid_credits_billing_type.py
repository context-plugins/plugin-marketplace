from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType(str, Enum):
    ADVANCE = "Advance"
    ARREARS = "Arrears"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingSeatBasedPrepaidCreditsBillingType),
]
