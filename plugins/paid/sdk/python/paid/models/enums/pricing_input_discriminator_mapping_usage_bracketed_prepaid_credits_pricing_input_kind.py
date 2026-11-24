from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind(str, Enum):
    SIGNAL_QUANTITY = "signalQuantity"

    __str__ = str.__str__


PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKindOrStr: TypeAlias = Annotated[
    PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind | str,
    open_enum_validator(PricingInputDiscriminatorMappingUsageBracketedPrepaidCreditsPricingInputKind),
]
