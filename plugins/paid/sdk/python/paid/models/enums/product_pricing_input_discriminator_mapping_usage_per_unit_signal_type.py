from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingUsagePerUnitSignalType(str, Enum):
    ACTIVITY = "activity"
    OUTCOME = "outcome"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingUsagePerUnitSignalTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingUsagePerUnitSignalType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingUsagePerUnitSignalType),
]
