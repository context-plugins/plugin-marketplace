from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel


class SegmentStats(SdkBaseModel):
    open_rate: float
    """The average open rate of the subscribers in the segment."""

    total_sent: int
    """The total number of emails sent to the subscribers in the segment."""

    percentage_premium_subscribers: float
    """The percentage of subscribers in this segment who are premium in any tier."""

    percentage_subscribers_with_referrals: float
    """The percentage of subscribers in this segment who have referred at least one other subscriber."""

    unique_emails_clicked: int
    """The total number of unique emails clicked by subscribers in the segment."""

    total_delivered: int
    """The total number of emails delivered to subscribers in the segment."""

    total_referrals: int
    """The total number of referrals from subscribers in the segment."""

    unsubscribed_rate: float
    """The percentage of subscribers in this segment who have unsubscribed."""

    total_subscribers: int
    """The total number of subscribers in the segment."""

    clickthrough_rate: float
    """The average clickthrough rate of the subscribers in the segment."""

    unsubscribed_count: int
    """The total number of subscribers in the segment who are unsubscribed."""

    unique_emails_opened: int
    """The total number of unique emails opened by subscribers in the segment."""

    premium_subscribers: int
    """The total number of premium subscribers in the segment."""

    average_referrals_per_subscriber: float
    """The average number of referrals per subscriber in the segment."""


class SegmentStatsDict(TypedDict):
    open_rate: float
    total_sent: int
    percentage_premium_subscribers: float
    percentage_subscribers_with_referrals: float
    unique_emails_clicked: int
    total_delivered: int
    total_referrals: int
    unsubscribed_rate: float
    total_subscribers: int
    clickthrough_rate: float
    unsubscribed_count: int
    unique_emails_opened: int
    premium_subscribers: int
    average_referrals_per_subscriber: float
