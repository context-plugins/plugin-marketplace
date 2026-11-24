from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .post_click_stats_email import PostClickStatsEmail, PostClickStatsEmailDict
from .post_click_stats_web import PostClickStatsWeb, PostClickStatsWebDict


class ClickStats(SdkBaseModel):
    """Details about specific URL's click stats from a post."""

    url: Optional[str] = UNSET
    """The URL the stats are for"""

    base_url: Optional[str] = UNSET
    """The canonical URL with all query parameters and fragments removed. Derived by stripping everything after the '?'
    and '#' characters. Preserves the protocol, host (including casing), port, and path exactly as they appear in the
    original URL. Guaranteed to be present whenever url is present, enabling grouping of clicks by destination
    regardless of tracking parameters."""

    email: Optional[PostClickStatsEmail] = UNSET
    """URL stats scoped only to email recipients. Not relevant for posts published only to web"""

    web: Optional[PostClickStatsWeb] = UNSET
    """Stats scoped only to web views. Not relevant for posts published only to email"""

    total_clicks: Optional[int] = UNSET
    total_unique_clicks: Optional[int] = UNSET
    total_click_through_rate: Optional[float] = UNSET
    """The percentage of clicks on the URL compared to the total number of recipients and web views"""


class ClickStatsDict(TypedDict):
    url: NotRequired[str]
    base_url: NotRequired[str]
    email: NotRequired[PostClickStatsEmailDict]
    web: NotRequired[PostClickStatsWebDict]
    total_clicks: NotRequired[int]
    total_unique_clicks: NotRequired[int]
    total_click_through_rate: NotRequired[float]
