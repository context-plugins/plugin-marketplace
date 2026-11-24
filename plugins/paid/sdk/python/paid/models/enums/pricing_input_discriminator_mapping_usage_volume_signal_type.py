from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingUsageVolumeSignalType(str, Enum):
    ACTIVITY = "activity"
    OUTCOME = "outcome"

    __str__ = str.__str__


PricingInputDiscriminatorMappingUsageVolumeSignalTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingUsageVolumeSignalType | str,
    open_enum_validator(PricingInputDiscriminatorMappingUsageVolumeSignalType),
]
