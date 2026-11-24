from __future__ import annotations

from typing import TypeAlias

from ..active_item import ActiveItem, ActiveItemDict
from ..sold_item import SoldItem, SoldItemDict

ItemCompSniperMarketplaceAndShippingScrapeApi: TypeAlias = SoldItem | ActiveItem

ItemCompSniperMarketplaceAndShippingScrapeApiDict: TypeAlias = SoldItemDict | ActiveItemDict
