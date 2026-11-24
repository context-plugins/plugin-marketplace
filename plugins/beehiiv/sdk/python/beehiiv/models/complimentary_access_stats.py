from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ComplimentaryAccessStats(SdkBaseModel):
    """Optional stats for a complimentary access object. Retrievable by including ``expand: [stats]`` in the request."""

    total_granted: int
    """Total number of subscriptions that have ever been granted this complimentary access."""

    active_granted: int
    """Number of subscriptions currently within an active complimentary access period."""


class ComplimentaryAccessStatsDict(TypedDict):
    total_granted: int
    active_granted: int
