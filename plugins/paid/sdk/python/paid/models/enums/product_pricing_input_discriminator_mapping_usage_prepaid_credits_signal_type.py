from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType(str, Enum):
    ACTIVITY = "activity"
    OUTCOME = "outcome"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalTypeOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingUsagePrepaidCreditsSignalType),
]
