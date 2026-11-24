from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class StatusCompSniperMarketplaceAndShippingShippingRatesApi(str, Enum):
    ELIGIBLE = "eligible"
    CONDITIONAL = "conditional"

    __str__ = str.__str__


StatusCompSniperMarketplaceAndShippingShippingRatesApiOrStr: TypeAlias = Annotated[
    StatusCompSniperMarketplaceAndShippingShippingRatesApi | str,
    open_enum_validator(StatusCompSniperMarketplaceAndShippingShippingRatesApi),
]
