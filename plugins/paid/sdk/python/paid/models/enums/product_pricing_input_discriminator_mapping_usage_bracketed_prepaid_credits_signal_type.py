from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType(str, Enum):
    ACTIVITY = "activity"
    OUTCOME = "outcome"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsSignalType),
]
