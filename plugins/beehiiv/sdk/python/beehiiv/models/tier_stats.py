from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class TierStats(SdkBaseModel):
    """Optional list of stats for a tier. Retrievable by including ``expand: [stats]`` in the tier request body."""

    active_subscriptions: int
    """Total number of active subscriptions belonging to this tier."""


class TierStatsDict(TypedDict):
    active_subscriptions: int
