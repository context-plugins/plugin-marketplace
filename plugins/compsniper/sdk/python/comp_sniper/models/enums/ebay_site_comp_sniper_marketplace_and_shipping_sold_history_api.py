from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi(str, Enum):
    """eBay marketplace"""

    EBAY_COM = "ebay.com"
    EBAY_CO_UK = "ebay.co.uk"
    EBAY_COM_AU = "ebay.com.au"
    EBAY_CA = "ebay.ca"
    EBAY_DE = "ebay.de"
    EBAY_FR = "ebay.fr"
    EBAY_IT = "ebay.it"
    EBAY_ES = "ebay.es"

    __str__ = str.__str__


EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApiOrStr: TypeAlias = Annotated[
    EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi | str,
    open_enum_validator(EbaySiteCompSniperMarketplaceAndShippingSoldHistoryApi),
]
