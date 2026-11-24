from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AutomationEmailStatsClicks(SdkBaseModel):
    url: Optional[str] = UNSET
    """The URL the stats are for"""

    total_clicks: Optional[int] = UNSET
    total_unique_clicks: Optional[int] = UNSET
    total_click_through_rate: Optional[float] = UNSET
    """The percentage of clicks on the URL compared to the total number of unique opens"""


class AutomationEmailStatsClicksDict(TypedDict):
    url: NotRequired[str]
    total_clicks: NotRequired[int]
    total_unique_clicks: NotRequired[int]
    total_click_through_rate: NotRequired[float]
