from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductSimplePricePointTiersItemsTierBillingType(str, Enum):
    FLAT = "flat"
    PER_UNIT = "perUnit"

    __str__ = str.__str__


ProductSimplePricePointTiersItemsTierBillingTypeOrStr: TypeAlias = Annotated[
    ProductSimplePricePointTiersItemsTierBillingType | str,
    open_enum_validator(ProductSimplePricePointTiersItemsTierBillingType),
]
