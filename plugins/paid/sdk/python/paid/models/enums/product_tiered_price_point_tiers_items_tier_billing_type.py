from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductTieredPricePointTiersItemsTierBillingType(str, Enum):
    FLAT = "flat"
    PER_UNIT = "perUnit"

    __str__ = str.__str__


ProductTieredPricePointTiersItemsTierBillingTypeOrStr: TypeAlias = Annotated[
    ProductTieredPricePointTiersItemsTierBillingType | str,
    open_enum_validator(ProductTieredPricePointTiersItemsTierBillingType),
]
