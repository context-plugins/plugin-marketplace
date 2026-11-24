from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingUsageCostPlusSignalType(str, Enum):
    ACTIVITY = "activity"
    OUTCOME = "outcome"

    __str__ = str.__str__


PricingInputDiscriminatorMappingUsageCostPlusSignalTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingUsageCostPlusSignalType | str,
    open_enum_validator(PricingInputDiscriminatorMappingUsageCostPlusSignalType),
]
