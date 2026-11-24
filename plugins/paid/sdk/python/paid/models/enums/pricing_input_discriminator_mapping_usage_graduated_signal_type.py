from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingUsageGraduatedSignalType(str, Enum):
    ACTIVITY = "activity"
    OUTCOME = "outcome"

    __str__ = str.__str__


PricingInputDiscriminatorMappingUsageGraduatedSignalTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingUsageGraduatedSignalType | str,
    open_enum_validator(PricingInputDiscriminatorMappingUsageGraduatedSignalType),
]
