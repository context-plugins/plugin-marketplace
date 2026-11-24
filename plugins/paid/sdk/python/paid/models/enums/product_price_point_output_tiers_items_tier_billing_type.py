from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ProductPricePointOutputTiersItemsTierBillingType(str, Enum):
    FLAT = "flat"
    PER_UNIT = "perUnit"

    __str__ = str.__str__


ProductPricePointOutputTiersItemsTierBillingTypeOrStr: TypeAlias = Annotated[
    ProductPricePointOutputTiersItemsTierBillingType | str,
    open_enum_validator(ProductPricePointOutputTiersItemsTierBillingType),
]
