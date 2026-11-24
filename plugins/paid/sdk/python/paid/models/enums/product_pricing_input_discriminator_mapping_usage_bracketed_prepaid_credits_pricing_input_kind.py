from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind(str, Enum):
    SIGNAL_QUANTITY = "signalQuantity"

    __str__ = str.__str__


ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKindOrStr: TypeAlias = Annotated[
    ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind | str,
    open_enum_validator(ProductPricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind),
]
