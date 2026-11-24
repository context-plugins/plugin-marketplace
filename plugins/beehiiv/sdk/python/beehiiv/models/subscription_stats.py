from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class SubscriptionStats(SdkBaseModel):
    """Optional list of stats for a subscription. Retrievable by including ``expand: [stats]`` in the request body."""

    emails_received: Optional[int] = UNSET
    """The total number of emails that have been sent to this subscriber"""

    open_rate: Optional[float] = UNSET
    """The percentage of emails that the subscriber has opened"""

    click_through_rate: Optional[float] = UNSET
    """The percentage of emails that the subscriber has clicked a link in"""


class SubscriptionStatsDict(TypedDict):
    emails_received: NotRequired[int]
    open_rate: NotRequired[float]
    click_through_rate: NotRequired[float]
