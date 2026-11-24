from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .automation_email_stats_clicks import AutomationEmailStatsClicks, AutomationEmailStatsClicksDict
from .automation_email_stats_email2 import AutomationEmailStatsEmail2, AutomationEmailStatsEmail2Dict


class AutomationEmailStats(SdkBaseModel):
    """Statistics for an automation email message."""

    email: Optional[AutomationEmailStatsEmail2] = UNSET
    """Stats scoped to email recipients"""

    clicks: Optional[list[AutomationEmailStatsClicks]] = UNSET
    """An array of click statistics for each URL in the email"""


class AutomationEmailStatsDict(TypedDict):
    email: NotRequired[AutomationEmailStatsEmail2Dict]
    clicks: NotRequired[list[AutomationEmailStatsClicksDict]]
