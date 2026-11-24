from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class ItemConditionCompSniperMarketplaceAndShippingMercariApi(str, Enum):
    """Condition filter"""

    ANY = "any"
    NEW = "new"
    LIKE_NEW = "likeNew"
    GOOD = "good"
    FAIR = "fair"
    POOR = "poor"

    __str__ = str.__str__


ItemConditionCompSniperMarketplaceAndShippingMercariApiOrStr: TypeAlias = Annotated[
    ItemConditionCompSniperMarketplaceAndShippingMercariApi | str,
    open_enum_validator(ItemConditionCompSniperMarketplaceAndShippingMercariApi),
]
