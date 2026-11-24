from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .unions.active_free_subscription_count import ActiveFreeSubscriptionCount, ActiveFreeSubscriptionCountDict
from .unions.active_premium_subscription_count import ActivePremiumSubscriptionCount, ActivePremiumSubscriptionCountDict
from .unions.active_subscription_count import ActiveSubscriptionCount, ActiveSubscriptionCountDict
from .unions.average_click_rate import AverageClickRate, AverageClickRateDict
from .unions.average_open_rate import AverageOpenRate, AverageOpenRateDict
from .unions.total_clicks import TotalClicks, TotalClicksDict
from .unions.total_emails_sent import TotalEmailsSent, TotalEmailsSentDict
from .unions.total_unique_opens import TotalUniqueOpens, TotalUniqueOpensDict


class PublicationStats(SdkBaseModel):
    """Optional list of stats for a publication. Retrievable by including an ``expand`` array in the publication request
    body. Add ``"stats"`` to the array to retrieve all, or add individual stats (prefaced with ``stat_``) to only
    retrieve specific ones.

    Examples:
    {
      "expand": ["stats"]
    }

    {
      "expand": ["stat_active_subscriptions", "stat_average_click_rate"]
    }"""

    active_subscriptions: Optional[ActiveSubscriptionCount] = UNSET
    """Total number of active free and premium subscriptions"""

    active_premium_subscriptions: Optional[ActivePremiumSubscriptionCount] = UNSET
    """Total number of active premium/paid subscriptions"""

    active_free_subscriptions: Optional[ActiveFreeSubscriptionCount] = UNSET
    """Total number of active free subscriptions"""

    average_open_rate: Optional[AverageOpenRate] = UNSET
    """The publications historical average open rate"""

    average_click_rate: Optional[AverageClickRate] = UNSET
    """The publications historical average click through rate"""

    total_sent: Optional[TotalEmailsSent] = UNSET
    """Total number of emails sent"""

    total_unique_opened: Optional[TotalUniqueOpens] = UNSET
    """Total number of uniquely opened emails. Only counts the first open for each subscriber."""

    total_clicked: Optional[TotalClicks] = UNSET
    """The total number of links clicked from emails."""


class PublicationStatsDict(TypedDict):
    active_subscriptions: NotRequired[ActiveSubscriptionCountDict]
    active_premium_subscriptions: NotRequired[ActivePremiumSubscriptionCountDict]
    active_free_subscriptions: NotRequired[ActiveFreeSubscriptionCountDict]
    average_open_rate: NotRequired[AverageOpenRateDict]
    average_click_rate: NotRequired[AverageClickRateDict]
    total_sent: NotRequired[TotalEmailsSentDict]
    total_unique_opened: NotRequired[TotalUniqueOpensDict]
    total_clicked: NotRequired[TotalClicksDict]
