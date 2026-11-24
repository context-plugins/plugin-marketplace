from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .automation_stats_email2 import AutomationStatsEmail2, AutomationStatsEmail2Dict
from .automation_stats_journeys2 import AutomationStatsJourneys2, AutomationStatsJourneys2Dict


class AutomationStats(SdkBaseModel):
    """Optional statistics for an automation. Retrievable by including ``expand: [stats]`` in the automation request."""

    journeys: Optional[AutomationStatsJourneys2] = UNSET
    """Journey counts for the automation"""

    email: Optional[AutomationStatsEmail2] = UNSET
    """Aggregate email engagement statistics"""


class AutomationStatsDict(TypedDict):
    journeys: NotRequired[AutomationStatsJourneys2Dict]
    email: NotRequired[AutomationStatsEmail2Dict]
