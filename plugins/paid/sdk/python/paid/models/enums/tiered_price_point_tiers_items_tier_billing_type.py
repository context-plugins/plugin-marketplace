from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class TieredPricePointTiersItemsTierBillingType(str, Enum):
    FLAT = "flat"
    PER_UNIT = "perUnit"

    __str__ = str.__str__


TieredPricePointTiersItemsTierBillingTypeOrStr: TypeAlias = Annotated[
    TieredPricePointTiersItemsTierBillingType | str, open_enum_validator(TieredPricePointTiersItemsTierBillingType)
]
