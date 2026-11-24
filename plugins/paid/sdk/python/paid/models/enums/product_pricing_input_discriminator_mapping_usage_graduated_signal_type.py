from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingUsageGraduatedSignalType(str, Enum):
    ACTIVITY = "activity"
    OUTCOME = "outcome"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingUsageGraduatedSignalTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingUsageGraduatedSignalType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingUsageGraduatedSignalType),
]
