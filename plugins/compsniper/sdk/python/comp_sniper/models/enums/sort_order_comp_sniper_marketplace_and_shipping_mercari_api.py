from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SortOrderCompSniperMarketplaceAndShippingMercariApi(str, Enum):
    """Sort order. recentlySold maps to Mercari's current Recently sold option. mostPopular is accepted as a
    compatibility alias for recentlySold."""

    BEST_MATCH = "bestMatch"
    NEWEST = "newest"
    LOWEST_PRICE = "lowestPrice"
    HIGHEST_PRICE = "highestPrice"
    RECENTLY_SOLD = "recentlySold"
    MOST_POPULAR = "mostPopular"

    __str__ = str.__str__


SortOrderCompSniperMarketplaceAndShippingMercariApiOrStr: TypeAlias = Annotated[
    SortOrderCompSniperMarketplaceAndShippingMercariApi | str,
    open_enum_validator(SortOrderCompSniperMarketplaceAndShippingMercariApi),
]
