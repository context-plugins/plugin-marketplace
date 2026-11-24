from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType(str, Enum):
    ACTIVITY = "activity"
    OUTCOME = "outcome"

    __str__ = str.__str__


PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalTypeOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType | str,
    open_enum_validator(PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType),
]
