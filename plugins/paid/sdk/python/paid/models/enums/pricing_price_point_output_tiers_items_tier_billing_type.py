from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PricingPricePointOutputTiersItemsTierBillingType(str, Enum):
    FLAT = "flat"
    PER_UNIT = "perUnit"

    __str__ = str.__str__


PricingPricePointOutputTiersItemsTierBillingTypeOrStr: TypeAlias = Annotated[
    PricingPricePointOutputTiersItemsTierBillingType | str,
    open_enum_validator(PricingPricePointOutputTiersItemsTierBillingType),
]
