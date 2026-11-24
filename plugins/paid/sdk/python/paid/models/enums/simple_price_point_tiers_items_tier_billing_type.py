from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SimplePricePointTiersItemsTierBillingType(str, Enum):
    FLAT = "flat"
    PER_UNIT = "perUnit"

    __str__ = str.__str__


SimplePricePointTiersItemsTierBillingTypeOrStr: TypeAlias = Annotated[
    SimplePricePointTiersItemsTierBillingType | str, open_enum_validator(SimplePricePointTiersItemsTierBillingType)
]
