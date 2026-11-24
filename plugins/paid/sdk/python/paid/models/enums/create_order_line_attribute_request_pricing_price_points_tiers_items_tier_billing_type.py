from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class CreateOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingType(str, Enum):
    FLAT = "flat"
    PER_UNIT = "perUnit"

    __str__ = str.__str__


CreateOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingTypeOrStr: TypeAlias = Annotated[
    CreateOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingType | str,
    open_enum_validator(CreateOrderLineAttributeRequestPricingPricePointsTiersItemsTierBillingType),
]
