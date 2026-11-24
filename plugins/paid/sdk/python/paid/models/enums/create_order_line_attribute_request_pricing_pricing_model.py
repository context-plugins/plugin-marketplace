from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreateOrderLineAttributeRequestPricingPricingModel(str, Enum):
    PER_UNIT = "perUnit"
    VOLUME_PRICING = "volumePricing"
    GRADUATED_PRICING = "graduatedPricing"
    PREPAID_CREDITS = "prepaidCredits"
    BRACKETED_PREPAID_CREDITS = "bracketedPrepaidCredits"
    FLAT = "flat"

    __str__ = str.__str__


CreateOrderLineAttributeRequestPricingPricingModelOrStr: TypeAlias = Annotated[
    CreateOrderLineAttributeRequestPricingPricingModel | str,
    open_enum_validator(CreateOrderLineAttributeRequestPricingPricingModel),
]
