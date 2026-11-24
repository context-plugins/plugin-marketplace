from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubscriptionsPutRequestSubscriptionsItemTier(str, Enum):
    """The Tier of the Subscription (not required)"""

    FREE = "free"
    PREMIUM = "premium"

    __str__ = str.__str__


SubscriptionsPutRequestSubscriptionsItemTierOrStr: TypeAlias = Annotated[
    SubscriptionsPutRequestSubscriptionsItemTier | str,
    open_enum_validator(SubscriptionsPutRequestSubscriptionsItemTier),
]
