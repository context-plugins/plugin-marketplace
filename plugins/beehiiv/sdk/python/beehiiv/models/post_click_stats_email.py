from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PostClickStatsEmail(SdkBaseModel):
    """URL stats scoped only to email recipients. Not relevant for posts published only to web"""

    clicks: Optional[int] = UNSET
    unique_clicks: Optional[int] = UNSET
    verified_clicks: Optional[int] = UNSET
    """Total number of verified human email clicks on this URL. Verified clicks have passed bot detection and are
    confirmed to be from real subscribers."""

    unique_verified_clicks: Optional[int] = UNSET
    """Unique number of verified human email clicks on this URL. Only counts the first verified click per subscriber."""

    click_through_rate: Optional[float] = UNSET
    """The percentage of email clicks on the URL compared to the total number of recipients"""


class PostClickStatsEmailDict(TypedDict):
    clicks: NotRequired[int]
    unique_clicks: NotRequired[int]
    verified_clicks: NotRequired[int]
    unique_verified_clicks: NotRequired[int]
    click_through_rate: NotRequired[float]
