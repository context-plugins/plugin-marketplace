from enum import Enum
from typing import Annotated, TypeAlias

from ...core import open_enum_validator


class SubscriptionsPatchRequestSubscriptionsItemTier(str, Enum):
    """The Tier of the Subscription (not required)"""

    FREE = "free"
    PREMIUM = "premium"

    __str__ = str.__str__


SubscriptionsPatchRequestSubscriptionsItemTierOrStr: TypeAlias = Annotated[
    SubscriptionsPatchRequestSubscriptionsItemTier | str,
    open_enum_validator(SubscriptionsPatchRequestSubscriptionsItemTier),
]
