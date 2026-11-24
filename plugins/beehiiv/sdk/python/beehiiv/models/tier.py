from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.tier_status import TierStatusOrStr
from .tier_price import TierPrice, TierPriceDict
from .tier_stats import TierStats, TierStatsDict


class Tier(SdkBaseModel):
    """The subscription tier object."""

    id: str
    """The prefixed ID of the tier."""

    name: str
    status: TierStatusOrStr
    """Returns whether or not the tier has any active prices."""

    description: str = "Super engaged readers"
    stats: Optional[TierStats] = UNSET
    """Optional list of stats for a tier. Retrievable by including ``expand: [stats]`` in the tier request body."""

    prices: Optional[list[TierPrice]] = UNSET
    """Optional list of prices for a tier. Retrievable by including ``expand: [prices]`` in the tier request body."""


class TierDict(TypedDict):
    id: str
    name: str
    status: TierStatusOrStr
    description: NotRequired[str]
    stats: NotRequired[TierStatsDict]
    prices: NotRequired[list[TierPriceDict]]
