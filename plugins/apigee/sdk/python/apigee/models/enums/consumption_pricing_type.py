from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ConsumptionPricingType(str, Enum):
    """Pricing model used for consumption-based charges."""

    CONSUMPTION_PRICING_TYPE_UNSPECIFIED = "CONSUMPTION_PRICING_TYPE_UNSPECIFIED"
    FIXED_PER_UNIT = "FIXED_PER_UNIT"
    BANDED = "BANDED"
    TIERED = "TIERED"
    STAIRSTEP = "STAIRSTEP"

    __str__ = str.__str__


ConsumptionPricingTypeOrStr: TypeAlias = Annotated[
    ConsumptionPricingType | str, open_enum_validator(ConsumptionPricingType)
]
