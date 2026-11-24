from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PostStatsEmail(SdkBaseModel):
    """Stats scoped only to email recipients. Not relevant for posts published only to web"""

    recipients: int = 0
    """Total number of email recipients"""

    delivered: int = 0
    """Total number of emails delivered"""

    opens: int = 0
    """Total number of email opens"""

    unique_opens: int = 0
    """Total number of unique email opens"""

    open_rate: Optional[float] = UNSET
    """The percentage of emails that have been opened"""

    clicks: int = 0
    """Total number of email clicks"""

    unique_clicks: int = 0
    """Unique number of email clicks"""

    verified_clicks: int = 0
    """Total number of verified human email clicks across all URLs in this post. Verified clicks have passed bot
    detection and are confirmed to be from real subscribers."""

    unique_verified_clicks: int = 0
    """Unique number of verified human email clicks across all URLs in this post. Only counts the first verified click
    per subscriber."""

    click_rate: Optional[float] = UNSET
    """The percentage of emails that have been clicked"""

    unsubscribes: int = 0
    """Total number of email unsubscribes"""

    spam_reports: int = 0
    """The number of subscribers that reported this post email as spam"""


class PostStatsEmailDict(TypedDict):
    recipients: NotRequired[int]
    delivered: NotRequired[int]
    opens: NotRequired[int]
    unique_opens: NotRequired[int]
    open_rate: NotRequired[float]
    clicks: NotRequired[int]
    unique_clicks: NotRequired[int]
    verified_clicks: NotRequired[int]
    unique_verified_clicks: NotRequired[int]
    click_rate: NotRequired[float]
    unsubscribes: NotRequired[int]
    spam_reports: NotRequired[int]
