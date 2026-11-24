from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusCompSniperMarketplaceAndShippingMercariApi(str, Enum):
    SOLD = "sold"
    ACTIVE = "active"

    __str__ = str.__str__


StatusCompSniperMarketplaceAndShippingMercariApiOrStr: TypeAlias = Annotated[
    StatusCompSniperMarketplaceAndShippingMercariApi | str,
    open_enum_validator(StatusCompSniperMarketplaceAndShippingMercariApi),
]
