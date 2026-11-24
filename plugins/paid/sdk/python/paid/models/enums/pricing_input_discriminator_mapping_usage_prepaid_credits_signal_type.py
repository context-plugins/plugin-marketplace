from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType(str, Enum):
    ACTIVITY = "activity"
    OUTCOME = "outcome"

    __str__ = str.__str__


PricingInputDiscriminatorMappingUsagePrepaidCreditsSignalTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType | str,
    open_enum_validator(PricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType),
]
