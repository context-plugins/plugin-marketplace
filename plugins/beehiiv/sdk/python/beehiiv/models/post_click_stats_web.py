from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PostClickStatsWeb(SdkBaseModel):
    """Stats scoped only to web views. Not relevant for posts published only to email"""

    clicks: Optional[int] = UNSET
    unique_clicks: Optional[int] = UNSET
    click_through_rate: Optional[float] = UNSET
    """The percentage of clicks on the URL compared to the total number of web views"""


class PostClickStatsWebDict(TypedDict):
    clicks: NotRequired[int]
    unique_clicks: NotRequired[int]
    click_through_rate: NotRequired[float]
