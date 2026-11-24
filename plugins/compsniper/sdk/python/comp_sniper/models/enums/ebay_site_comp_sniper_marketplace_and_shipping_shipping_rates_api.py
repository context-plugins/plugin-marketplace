from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi(str, Enum):
    EBAY_COM = "ebay.com"

    __str__ = str.__str__


EbaySiteCompSniperMarketplaceAndShippingShippingRatesApiOrStr: TypeAlias = Annotated[
    EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi | str,
    open_enum_validator(EbaySiteCompSniperMarketplaceAndShippingShippingRatesApi),
]
