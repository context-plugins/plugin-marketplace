from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import SdkBaseModel


class AutomationStatsJourneys2(SdkBaseModel):
    """Journey counts for the automation"""

    running: int = 0
    """Number of journeys currently in progress"""

    completed: int = 0
    """Number of completed journeys"""

    total: int = 0
    """Total number of journeys"""


class AutomationStatsJourneys2Dict(TypedDict):
    running: NotRequired[int]
    completed: NotRequired[int]
    total: NotRequired[int]
