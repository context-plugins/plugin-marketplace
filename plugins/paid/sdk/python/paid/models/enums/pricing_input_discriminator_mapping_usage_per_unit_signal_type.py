from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingUsagePerUnitSignalType(str, Enum):
    ACTIVITY = "activity"
    OUTCOME = "outcome"

    __str__ = str.__str__


PricingInputDiscriminatorMappingUsagePerUnitSignalTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingUsagePerUnitSignalType | str,
    open_enum_validator(PricingInputDiscriminatorMappingUsagePerUnitSignalType),
]
