from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class PublicationsRequestExpandItem(str, Enum):
    STATS = "stats"
    STAT_ACTIVE_SUBSCRIPTIONS = "stat_active_subscriptions"
    STAT_ACTIVE_PREMIUM_SUBSCRIPTIONS = "stat_active_premium_subscriptions"
    STAT_ACTIVE_FREE_SUBSCRIPTIONS = "stat_active_free_subscriptions"
    STAT_AVERAGE_OPEN_RATE = "stat_average_open_rate"
    STAT_AVERAGE_CLICK_RATE = "stat_average_click_rate"
    STAT_TOTAL_SENT = "stat_total_sent"
    STAT_TOTAL_UNIQUE_OPENED = "stat_total_unique_opened"
    STAT_TOTAL_CLICKED = "stat_total_clicked"

    __str__ = str.__str__


PublicationsRequestExpandItemOrStr: TypeAlias = Annotated[
    PublicationsRequestExpandItem | str, open_enum_validator(PublicationsRequestExpandItem)
]
