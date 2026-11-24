from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class AutomationStatsJourneys(SdkBaseModel):
    """Journey counts for an automation."""

    running: int = 0
    """Number of journeys currently in progress"""

    completed: int = 0
    """Number of completed journeys"""

    total: int = 0
    """Total number of journeys"""


class AutomationStatsJourneysDict(TypedDict):
    running: NotRequired[int]
    completed: NotRequired[int]
    total: NotRequired[int]
