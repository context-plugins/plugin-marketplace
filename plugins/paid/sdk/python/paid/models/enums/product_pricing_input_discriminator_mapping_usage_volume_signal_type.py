from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingUsageVolumeSignalType(str, Enum):
    ACTIVITY = "activity"
    OUTCOME = "outcome"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingUsageVolumeSignalTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingUsageVolumeSignalType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingUsageVolumeSignalType),
]
