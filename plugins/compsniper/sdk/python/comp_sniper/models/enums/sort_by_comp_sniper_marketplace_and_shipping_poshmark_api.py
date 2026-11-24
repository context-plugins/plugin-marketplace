from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortByCompSniperMarketplaceAndShippingPoshmarkApi(str, Enum):
    """Sort order for results"""

    SOLD_RECENTLY = "sold_recently"
    PRICE_ASC = "price_asc"
    PRICE_DESC = "price_desc"
    LIKES = "likes"

    __str__ = str.__str__


SortByCompSniperMarketplaceAndShippingPoshmarkApiOrStr: TypeAlias = Annotated[
    SortByCompSniperMarketplaceAndShippingPoshmarkApi | str,
    open_enum_validator(SortByCompSniperMarketplaceAndShippingPoshmarkApi),
]
